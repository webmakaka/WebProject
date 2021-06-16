import {Module} from '@nestjs/common';
import {TypegooseModule} from 'nestjs-typegoose';
import {ReviewModel} from 'review/review.model';
import {TelegramModule} from 'telegram/telegram.module';
import {ReviewController} from './review.controller';
import {ReviewService} from './review.service';

@Module({
  controllers: [ReviewController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ReviewModel,
        schemaOptions: {
          collection: 'Review',
        },
      },
    ]),
    TelegramModule,
  ],
  providers: [ReviewService],
})
export class ReviewModule {}
