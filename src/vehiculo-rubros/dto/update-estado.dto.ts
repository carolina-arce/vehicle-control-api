import { IsEnum } from 'class-validator'
import { EstadoVerificacion } from '../../common/enums/estado-verificacion.enum'

export class UpdateEstadoDto {
  @IsEnum(EstadoVerificacion)
  estadoVerificacion: EstadoVerificacion
}
