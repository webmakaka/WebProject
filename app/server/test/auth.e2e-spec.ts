import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from 'app.module';
import { AuthDto } from 'auth/dto/auth.dto';
import { disconnect } from 'mongoose';
import * as request from 'supertest';

const loginDto: AuthDto = {
  login: 'test@example.com',
  password: 'testpass123',
};

describe('AuthController (e2e)', () => {
  let app: INestApplication;
  let createdId: string;
  let token: string;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(() => {
    disconnect();
  });

  it('/auth/login (POST) - success', async () => {
    await request(app.getHttpServer())
      .post('/auth/login')
      .send(loginDto)
      .expect(200)
      .then(({ body }: request.Response) => {
        const access_token = body.access_token;
        expect(access_token).toBeDefined();
      });
  });

  it('/auth/login (POST) - fail password', async () => {
    await request(app.getHttpServer())
      .post('/auth/login')
      .send({ ...loginDto, password: 'pass1234' })
      .expect(401, {
        statusCode: 401,
        message: 'Неверный пароль!',
        error: 'Unauthorized',
      });
  });

  it('/auth/login (POST) - fail login', async () => {
    await request(app.getHttpServer())
      .post('/auth/login')
      .send({ ...loginDto, login: 'testuser@example.com' })
      .expect(401, {
        statusCode: 401,
        message: 'Пользователь с таким email не найден!',
        error: 'Unauthorized',
      });
  });
});
