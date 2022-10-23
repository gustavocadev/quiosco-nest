import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QuioscoService } from './quiosco.service';
import { CreateQuioscoDto } from './dto/create-quiosco.dto';
import { UpdateQuioscoDto } from './dto/update-quiosco.dto';

@Controller('quiosco')
export class QuioscoController {
  // this is a injection of the service
  constructor(private readonly quioscoService: QuioscoService) {}

  @Post()
  create(@Body() createQuioscoDto: CreateQuioscoDto) {
    return this.quioscoService.create(createQuioscoDto);
  }

  @Get()
  findAll() {
    return this.quioscoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quioscoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuioscoDto: UpdateQuioscoDto) {
    return this.quioscoService.update(+id, updateQuioscoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quioscoService.remove(+id);
  }
}
