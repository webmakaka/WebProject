import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import {IdValidationPipe} from 'pipes/ad-validation.pipe';
import {CreateProductDto} from 'product/dto/create-roduct.dto';
import {FindProductDto} from 'product/dto/find.product.dto';
import {PRODUCT_NOT_FOUND_ERROR} from 'product/product.constants';
import {ProductModel} from 'product/product.model';
import {ProductService} from 'product/product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('create')
  async create(@Body() dto: CreateProductDto) {
    return this.productService.create(dto);
  }

  @Get(':id')
  async get(@Param('id', IdValidationPipe) id: string) {
    const product = await this.productService.findById(id);
    if (!product) {
      throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
    }
    return product;
  }

  @Delete(':id')
  async delete(@Param('id', IdValidationPipe) id: string) {
    const deletedProduct = await this.productService.deleteById(id);
    if (!deletedProduct) {
      throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
    }
  }

  @Patch(':id')
  async patch(
    @Param('id', IdValidationPipe) id: string,
    @Body() dto: ProductModel,
  ) {
    const updatedProduct = await this.productService.updateById(id, dto);
    if (!updatedProduct) {
      throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
    }
    return updatedProduct;
  }

  @Post('find')
  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  async find(@Body() dto: FindProductDto) {
    return this.productService.findWithReviews(dto);
  }
}
