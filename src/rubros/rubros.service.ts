import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Rubro } from './rubro.entity'
import { CreateRubroDto } from './dto/create-rubro.dto'

@Injectable()
export class RubrosService {
  constructor(
    @InjectRepository(Rubro)
    private readonly rubroRepo: Repository<Rubro>,
  ) {}

  async findAll(): Promise<Rubro[]> {
    return this.rubroRepo.find({ order: { nombre: 'ASC' } })
  }

  async findOne(id: number): Promise<Rubro> {
    const rubro = await this.rubroRepo.findOneBy({ id })
    if (!rubro) throw new NotFoundException(`Rubro #${id} no encontrado`)
    return rubro
  }

  async create(dto: CreateRubroDto): Promise<Rubro> {
    const rubro = this.rubroRepo.create(dto)
    return this.rubroRepo.save(rubro)
  }
}
