import { IsString, IsDateString, IsBoolean, IsNotEmpty, IsOptional } from 'class-validator'

export class CreateVehiculoDto {
  @IsString()
  @IsNotEmpty()
  codigo: string

  @IsDateString()
  fechaArribo: string

  @IsString()
  @IsNotEmpty()
  destino: string

  @IsDateString()
  fechaIntervencionAgente: string

  @IsBoolean()
  @IsOptional()
  activo?: boolean

  @IsString()
  @IsNotEmpty()
  creadoPor: string
}
