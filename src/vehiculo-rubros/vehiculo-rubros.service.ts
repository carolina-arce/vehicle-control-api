import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { VehiculoRubro } from './vehiculo-rubro.entity'
import { CreateVehiculoRubroDto } from './dto/create-vehiculo-rubro.dto'
import { UpdateEstadoDto } from './dto/update-estado.dto'

@Injectable()
export class VehiculoRubrosService {
  constructor(
    @InjectRepository(VehiculoRubro)
    private readonly vehiculoRubroRepo: Repository<VehiculoRubro>,
  ) {}

  async findByVehiculo(vehiculoId: number): Promise<VehiculoRubro[]> {
    return this.vehiculoRubroRepo.find({
      where: { vehiculoId },
      relations: ['rubro'],
      order: { id: 'ASC' },
    })
  }

  async create(dto: CreateVehiculoRubroDto): Promise<VehiculoRubro> {
    const vehiculoRubro = this.vehiculoRubroRepo.create({
      ...dto,
      autorizacionConfirmada: dto.fechaAutorizacion ? 1 : 0,
      documentacionConfirmada: dto.fechaEnvioDocumentacion ? 1 : 0,
    })
    return this.vehiculoRubroRepo.save(vehiculoRubro)
  }

  async updateEstado(id: number, dto: UpdateEstadoDto): Promise<VehiculoRubro> {
    const vehiculoRubro = await this.vehiculoRubroRepo.findOneBy({ id })
    if (!vehiculoRubro) throw new NotFoundException(`Registro #${id} no encontrado`)
    vehiculoRubro.estadoVerificacion = dto.estadoVerificacion
    return this.vehiculoRubroRepo.save(vehiculoRubro)
  }
}
