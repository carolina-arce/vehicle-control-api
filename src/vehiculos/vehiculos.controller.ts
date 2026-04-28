import {
  Controller, Get, Post, Patch, Delete,
  Param, Body, ParseIntPipe,
} from '@nestjs/common'
import { VehiculosService } from './vehiculos.service'
import { CreateVehiculoDto } from './dto/create-vehiculo.dto'
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto'

@Controller('vehiculos')
export class VehiculosController {
  constructor(private readonly vehiculosService: VehiculosService) {}

  @Get()
  findAll() {
    return this.vehiculosService.findAll()
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.vehiculosService.findOne(id)
  }

  @Post()
  create(@Body() dto: CreateVehiculoDto) {
    return this.vehiculosService.create(dto)
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateVehiculoDto) {
    return this.vehiculosService.update(id, dto)
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.vehiculosService.remove(id)
  }
}