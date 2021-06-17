import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HhService } from 'hh/hh.service';
import { HhController } from './hh.controller';

@Module({
  providers: [HhService],
  controllers: [HhController],
  imports: [ConfigModule, HttpModule],
  exports: [HhService],
})
export class HhModule {}
