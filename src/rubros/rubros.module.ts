import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Rubro } from './rubro.entity'
import { RubrosService } from './rubros.service'
import { RubrosController } from './rubros.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Rubro])],
  controllers: [RubrosController],
  providers: [RubrosService],
  exports: [RubrosService],
})
export class RubrosModule {}
