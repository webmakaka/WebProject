import {
  Controller,
  HttpCode,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'auth/guards/jwt.guard';
import { FileElementResponse } from 'files/dto/file-element.response';
import { FilesService } from 'files/files.service';
import { MFile } from 'files/mfile.class';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  // @Post('upload')
  // async uploadFile(@Req() request: Request): Promise<string> {
  //   console.log('UPLOAD FILE 1');
  //   console.log(request);
  //   console.log('UPLOAD FILE 2');

  //   return 'WTF';
  // }

  // @Post('upload1')
  // @HttpCode(200)
  // @UseInterceptors(FileInterceptor('files'))
  // async uploadFile1(
  //   @UploadedFile() file: Express.Multer.File,
  // ): Promise<FileElementResponse[]> {
  //   console.log('UPLOAD FILE');
  //   console.log(file);
  //   console.log('UPLOAD FILE 1');

  //   return this.filesService.saveFiles([file]);
  // }

  @Post('upload')
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @UseInterceptors(FileInterceptor('files'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<FileElementResponse[]> {
    const saveArray: MFile[] = [new MFile(file)];

    if (file.mimetype.includes('image')) {
      const buffer = await this.filesService.convertToWebP(file.buffer);
      saveArray.push(
        new MFile({
          originalname: `${file.originalname.split('.')[0]}.webp`,
          buffer,
        }),
      );
    }
    return this.filesService.saveFiles(saveArray);
  }
}
