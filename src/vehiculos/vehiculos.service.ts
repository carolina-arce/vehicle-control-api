import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Vehiculo } from './vehiculo.entity'
import { CreateVehiculoDto } from './dto/create-vehiculo.dto'
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto'

@Injectable()
export class VehiculosService {
  constructor(
    @InjectRepository(Vehiculo)
    private readonly vehiculoRepo: Repository<Vehiculo>,
  ) {}

  async findAll(): Promise<Vehiculo[]> {
    return this.vehiculoRepo.find({
      where: { activo: true },
      relations: ['rubros', 'rubros.rubro'],
      order: { fechaArribo: 'DESC' },
    })
  }

  async findOne(id: number): Promise<Vehiculo> {
    const vehiculo = await this.vehiculoRepo.findOne({
      where: { id },
      relations: ['rubros', 'rubros.rubro'],
    })
    if (!vehiculo) throw new NotFoundException(`Vehículo #${id} no encontrado`)
    return vehiculo
  }

  async create(dto: CreateVehiculoDto): Promise<Vehiculo> {
    const vehiculo = this.vehiculoRepo.create(dto)
    return this.vehiculoRepo.save(vehiculo)
  }

  async update(id: number, dto: UpdateVehiculoDto): Promise<Vehiculo> {
    const vehiculo = await this.findOne(id)
    Object.assign(vehiculo, dto)
    return this.vehiculoRepo.save(vehiculo)
  }

  async remove(id: number): Promise<void> {
    const vehiculo = await this.findOne(id)
    // Baja lógica: no elimina el registro, solo lo desactiva
    vehiculo.activo = false
    await this.vehiculoRepo.save(vehiculo)
  }
}
