import { PartialType } from '@nestjs/mapped-types';
import { CreateQuioscoDto } from './create-quiosco.dto';

export class UpdateQuioscoDto extends PartialType(CreateQuioscoDto) {}
