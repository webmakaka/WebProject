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
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from 'auth/guards/jwt.guard';
import { HhService } from 'hh/hh.service';
import { IdValidationPipe } from 'pipes/id-validation.pipe';
import { CreateTopPageDto } from 'top-page/dto/create-top-page.dto';
import { FindTopPageDto } from 'top-page/dto/find-top-page.dto';
import { NOT_FOUND_TOP_PAGE_ERROR } from 'top-page/top-page.constants';
import { TopPageService } from 'top-page/top-page.service';

@Controller('top-page')
export class TopPageController {
  constructor(
    private readonly topPageService: TopPageService,
    private readonly hhService: HhService,
  ) {}

  @Post('create')
  @UseGuards(JwtAuthGuard)
  async create(@Body() dto: CreateTopPageDto) {
    return this.topPageService.create(dto);
  }

  @Get(':id')
  async get(@Param('id', IdValidationPipe) id: string) {
    const page = await this.topPageService.findById(id);
    if (!page) {
      throw new NotFoundException(NOT_FOUND_TOP_PAGE_ERROR);
    }
    return page;
  }

  @Get('byAlias/:alias')
  async getByAlias(@Param('alias') alias: string) {
    const page = await this.topPageService.findByAlias(alias);
    if (!page) {
      throw new NotFoundException(NOT_FOUND_TOP_PAGE_ERROR);
    }
    return page;
  }

  // @Get('textSearch/:text')
  // async textSearch(@Param('text') alias: string) {
  //   return this.topPageService.findByText(text);
  // }

  @Post('test')
  async test() {
    const data = await this.topPageService.findForHhUpdate(new Date());
    for (let page of data) {
      const hhData = await this.hhService.getData(page.category);
      page.hh = hhData;
      await this.sleep();
      await this.topPageService.updateById(page._id, page);
    }
  }

  sleep() {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: string) {
    const deletedPage = await this.topPageService.deleteById(id);
    if (!this.delete) {
      throw new NotFoundException(NOT_FOUND_TOP_PAGE_ERROR);
    }
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async patch(@Param('id') id: string, @Body() dto: CreateTopPageDto) {
    const updatedPage = await this.topPageService.updateById(id, dto);
    if (!updatedPage) {
      throw new NotFoundException(NOT_FOUND_TOP_PAGE_ERROR);
    }
    return updatedPage;
  }

  @Post('find')
  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  async find(@Body() dto: FindTopPageDto) {
    return this.topPageService.findByCaterogy(dto.firstCategory);
  }
}
