import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { VehiculoRubro } from './vehiculo-rubro.entity'
import { VehiculoRubrosService } from './vehiculo-rubros.service'
import { VehiculoRubrosController } from './vehiculo-rubros.controller'

@Module({
  imports: [TypeOrmModule.forFeature([VehiculoRubro])],
  controllers: [VehiculoRubrosController],
  providers: [VehiculoRubrosService],
})
export class VehiculoRubrosModule {}
