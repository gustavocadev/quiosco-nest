import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuioscoModule } from './quiosco/quiosco.module';

@Module({
  imports: [QuioscoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
