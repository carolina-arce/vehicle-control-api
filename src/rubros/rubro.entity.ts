import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { VehiculoRubro } from '../vehiculo-rubros/vehiculo-rubro.entity'

@Entity('rubros')
export class Rubro {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 100 })
  nombre: string

  @Column({ default: true })
  activo: boolean

  @OneToMany(() => VehiculoRubro, (vr) => vr.rubro)
  vehiculoRubros: VehiculoRubro[]
}
