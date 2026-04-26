import { PartialType } from '@nestjs/mapped-types'
import { CreateVehiculoDto } from './create-vehiculo.dto'

// PartialType hace todos los campos opcionales automáticamente
export class UpdateVehiculoDto extends PartialType(CreateVehiculoDto) {}
