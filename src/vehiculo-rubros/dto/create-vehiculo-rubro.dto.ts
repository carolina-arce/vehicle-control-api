import {
  IsString, IsNotEmpty, IsNumber, IsEnum,
  IsDateString, IsOptional, IsInt, Min,
} from 'class-validator'
import { EstadoVerificacion } from '../../common/enums/estado-verificacion.enum'
import { Canal } from '../../common/enums/canal.enum'

export class CreateVehiculoRubroDto {
  @IsInt()
  vehiculoId: number

  @IsInt()
  rubroId: number

  @IsString()
  @IsNotEmpty()
  numero: string

  @IsString()
  @IsOptional()
  observacion?: string

  @IsNumber()
  @Min(0)
  unidades: number

  @IsInt()
  @Min(0)
  bultos: number

  @IsEnum(Canal)
  @IsOptional()
  canal?: Canal

  @IsDateString()
  @IsOptional()
  fechaAutorizacion?: string

  @IsDateString()
  @IsOptional()
  fechaEnvioDocumentacion?: string

  @IsEnum(EstadoVerificacion)
  @IsOptional()
  estadoVerificacion?: EstadoVerificacion

  @IsDateString()
  @IsOptional()
  fechaInicioVerif?: string

  @IsDateString()
  @IsOptional()
  fechaEstFinVerif?: string

  @IsDateString()
  @IsOptional()
  entregadoAlLocal?: string

  @IsString()
  @IsOptional()
  observacionPrioridad?: string

  @IsString()
  @IsOptional()
  ubicacion?: string

  @IsString()
  @IsOptional()
  observacionDificultades?: string

  @IsString()
  @IsNotEmpty()
  creadoPor: string
}
