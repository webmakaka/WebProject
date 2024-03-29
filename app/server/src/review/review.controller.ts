import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from 'auth/guards/jwt.guard';
import { UserEmail } from 'decorators/user-email.decorator';
import { IdValidationPipe } from 'pipes/id-validation.pipe';
import { CreateReviewDto } from 'review/dto/create-review.dto';
import { REVIEW_NOT_FOUND } from 'review/review.constants';
import { ReviewService } from 'review/review.service';
import { TelegramService } from 'telegram/telegram.service';

@Controller('review')
export class ReviewController {
  constructor(
    private readonly reviewService: ReviewService,
    private readonly telegramService: TelegramService,
  ) {}

  @Post('create')
  @UsePipes(new ValidationPipe())
  async create(@Body() dto: CreateReviewDto) {
    return this.reviewService.create(dto);
  }

  @Post('notify')
  @UsePipes(new ValidationPipe())
  async notify(@Body() dto: CreateReviewDto) {
    const message =
      `Имя ${dto.name}\n` +
      `Заголовок: ${dto.title}\n` +
      `Описание: ${dto.description}\n` +
      `Рейтинг: ${dto.rating}\n` +
      `ID Продукта: ${dto.productId}`;
    return this.telegramService.sendMessage(message);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id', IdValidationPipe) id: string) {
    const deletedDoc = await this.reviewService.delete(id);
    if (!deletedDoc) {
      throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    return deletedDoc;
  }

  @Get('byProduct/:productId')
  async getByProduct(
    @Param('productId', IdValidationPipe) productId: string,
    @UserEmail() email: string,
  ) {
    return this.reviewService.findByProductId(productId);
  }
}
