import { Module } from '@nestjs/common';
import { QuioscoService } from './quiosco.service';
import { QuioscoController } from './quiosco.controller';

@Module({
  controllers: [QuioscoController],
  providers: [QuioscoService]
})
export class QuioscoModule {}
