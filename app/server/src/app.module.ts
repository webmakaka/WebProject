import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getMongoConfig } from 'configs/mongo.config';
import { TypegooseModule } from 'nestjs-typegoose';
import { ReviewModule } from 'review/review.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { TopPageModule } from './top-page/top-page.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
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
  ],
})
export class AppModule {}
