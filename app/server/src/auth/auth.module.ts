import { Module } from '@nestjs/common';
import { AuthModel } from 'auth/auth.model';
import { TypegooseModule } from 'nestjs-typegoose';
import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: AuthModel,
        schemaOptions: {
          collection: 'Auth',
        },
      },
    ]),
  ],
})
export class AuthModule {}
