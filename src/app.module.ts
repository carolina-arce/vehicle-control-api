import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from './database/database.module'
import { VehiculosModule } from './vehiculos/vehiculos.module'
import { RubrosModule } from './rubros/rubros.module'
import { VehiculoRubrosModule } from './vehiculo-rubros/vehiculo-rubros.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    DatabaseModule,

    VehiculosModule,
    RubrosModule,
    VehiculoRubrosModule,
  ],
})
export class AppModule {}
