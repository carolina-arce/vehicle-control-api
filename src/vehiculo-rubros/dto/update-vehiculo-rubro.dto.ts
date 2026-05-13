import { PartialType } from '@nestjs/mapped-types'
import { CreateVehiculoRubroDto } from './create-vehiculo-rubro.dto'

export class UpdateVehiculoRubroDto extends PartialType(CreateVehiculoRubroDto) {}