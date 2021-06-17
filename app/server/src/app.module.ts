import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { getMongoConfig } from 'configs/mongo.config';
import { getTelegramConfig } from 'configs/telegram.config';
import { TypegooseModule } from 'nestjs-typegoose';
import { ReviewModule } from 'review/review.module';
import { AuthModule } from './auth/auth.module';
import { FilesModule } from './files/files.module';
import { HhModule } from './hh/hh.module';
import { ProductModule } from './product/product.module';
import { TelegramModule } from './telegram/telegram.module';
import { TopPageModule } from './top-page/top-page.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot(),
    TypegooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfig,
    }),
    AuthModule,
    TopPageModule,
    ProductModule,
    ReviewModule,
    FilesModule,
    TelegramModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getTelegramConfig,
    }),
    HhModule,
  ],
})
export class AppModule {}
