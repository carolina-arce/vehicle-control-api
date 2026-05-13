import {
  Controller, Get, Post, Patch,
  Param, Body, ParseIntPipe,
} from '@nestjs/common'
import { VehiculoRubrosService } from './vehiculo-rubros.service'
import { CreateVehiculoRubroDto } from './dto/create-vehiculo-rubro.dto'
import { UpdateEstadoDto } from './dto/update-estado.dto'
import { UpdateVehiculoRubroDto } from './dto/update-vehiculo-rubro.dto'

@Controller('vehiculo-rubros')
export class VehiculoRubrosController {
  constructor(private readonly vehiculoRubrosService: VehiculoRubrosService) { }

  // GET /api/vehiculo-rubros/vehiculo/:vehiculoId
  @Get('vehiculo/:vehiculoId')
  findByVehiculo(@Param('vehiculoId', ParseIntPipe) vehiculoId: number) {
    return this.vehiculoRubrosService.findByVehiculo(vehiculoId)
  }

  // POST /api/vehiculo-rubros
  @Post()
  create(@Body() dto: CreateVehiculoRubroDto) {
    return this.vehiculoRubrosService.create(dto)
  }

  // PATCH /api/vehiculo-rubros/:id/estado
  @Patch(':id/estado')
  updateEstado(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateEstadoDto,
  ) {
    return this.vehiculoRubrosService.updateEstado(id, dto)
  }
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateVehiculoRubroDto,
  ) {
    return this.vehiculoRubrosService.update(id, dto)
  }
}
