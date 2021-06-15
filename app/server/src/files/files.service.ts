import { Injectable } from '@nestjs/common';
import { path } from 'app-root-path';
import { format } from 'date-fns';
import { FileElementResponse } from 'files/dto/file-element.response';
import { ensureDir, writeFile } from 'fs-extra';

@Injectable()
export class FilesService {
  async saveFiles(
    files: Express.Multer.File[],
  ): Promise<FileElementResponse[]> {
    const dateFolder = format(new Date(), 'yyyy-MM-dd');
    const uploadFolder = `${path}/uploads/${dateFolder}`;
    await ensureDir(uploadFolder);

    const res: FileElementResponse[] = [];

    console.log(dateFolder);

    for (const file of files) {
      await writeFile(`${uploadFolder}/${file.originalname}`, file.buffer);
      res.push({
        url: `${dateFolder}/${file.originalname}`,
        name: file.originalname,
      });
    }

    return res;
  }
}
