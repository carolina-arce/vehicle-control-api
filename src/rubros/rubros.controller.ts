import { Controller, Get, Post, Param, Body, ParseIntPipe } from '@nestjs/common'
import { RubrosService } from './rubros.service'
import { CreateRubroDto } from './dto/create-rubro.dto'

@Controller('rubros')
export class RubrosController {
  constructor(private readonly rubrosService: RubrosService) {}

  // GET /api/rubros
  @Get()
  findAll() {
    return this.rubrosService.findAll()
  }

  // GET /api/rubros/:id
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.rubrosService.findOne(id)
  }

  // POST /api/rubros
  @Post()
  create(@Body() dto: CreateRubroDto) {
    return this.rubrosService.create(dto)
  }
}
