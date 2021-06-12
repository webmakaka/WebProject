import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {JwtModule} from '@nestjs/jwt';
import {PassportModule} from '@nestjs/passport';
import {JwtStrategy} from 'auth/strategies/jwt.strategy';
import {UserModel} from 'auth/user.model';
import {getJWTConfig} from 'configs/jwt.config';
import {TypegooseModule} from 'nestjs-typegoose';
import {AuthController} from './auth.controller';
import {AuthService} from './auth.service';

@Module({
  controllers: [AuthController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: UserModel,
        schemaOptions: {
          collection: 'User',
        },
      },
    ]),
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getJWTConfig,
    }),
    PassportModule,
  ],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
