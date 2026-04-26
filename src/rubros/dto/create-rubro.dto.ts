import { IsString, IsNotEmpty } from 'class-validator'

export class CreateRubroDto {
  @IsString()
  @IsNotEmpty()
  nombre: string
}
