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
  ValidationPipe
} from '@nestjs/common';
import {JwtAuthGuard} from 'auth/guards/jwt.guard';
import {CreateReviewDto} from 'review/dto/create-review.dto';
import {REVIEW_NOT_FOUND} from 'review/review.constants';
import {ReviewService} from 'review/review.service';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post('create')
  @UsePipes(new ValidationPipe())
  async create(@Body() dto: CreateReviewDto) {
    return this.reviewService.create(dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deletedDoc = await this.reviewService.delete(id);
    if (!deletedDoc) {
      throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    return deletedDoc;
  }

  @Get('byProduct/:productId')
  @UseGuards(JwtAuthGuard)
  async getByProduct(@Param('productId') productId: string) {
    return this.reviewService.findByProductId(productId);
  }
}
