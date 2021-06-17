import { Module } from '@nestjs/common';
import { HhModule } from 'hh/hh.module';
import { TypegooseModule } from 'nestjs-typegoose';
import { TopPageModel } from 'top-page/top-page.model';
import { TopPageController } from './top-page.controller';
import { TopPageService } from './top-page.service';

@Module({
  controllers: [TopPageController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: TopPageModel,
        schemaOptions: {
          collection: 'TopPage',
        },
      },
    ]),
    HhModule,
  ],
  providers: [TopPageService],
})
export class TopPageModule {}
