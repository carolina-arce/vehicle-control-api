import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { Vehiculo } from '../vehiculos/vehiculo.entity'
import { Rubro } from '../rubros/rubro.entity'
import { VehiculoRubro } from '../vehiculo-rubros/vehiculo-rubro.entity'
import { Usuario } from '../usuarios/usuario.entity'
import { Auditoria } from '../auditoria/auditoria.entity'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host:     config.get<string>('DB_HOST', 'localhost'),
        port:     config.get<number>('DB_PORT', 5432),
        username: config.get<string>('DB_USER', 'postgres'),
        password: config.get<string>('DB_PASS', ''),
        database: config.get<string>('DB_NAME', 'vehicle_control'),
        entities: [Vehiculo, Rubro, VehiculoRubro, Usuario, Auditoria],
        synchronize: true, // solo en desarrollo — crea las tablas automáticamente
      }),
    }),
  ],
})
export class DatabaseModule {}
