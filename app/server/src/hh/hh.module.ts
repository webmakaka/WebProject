import {Module} from '@nestjs/common';
import { HhService } from 'hh/hh.service';
import {TopPageModule} from 'top-page/top-page.module';
import {HhController} from './hh.controller';

@Module({
  providers: [HhService],
  controllers: [HhController],
  imports: [TopPageModule],
})
export class HhModule {}
