import {
  Entity, PrimaryGeneratedColumn, Column,
  OneToMany, CreateDateColumn, UpdateDateColumn,
} from 'typeorm'
import { VehiculoRubro } from '../vehiculo-rubros/vehiculo-rubro.entity'

@Entity('vehiculos')
export class Vehiculo {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 10, nullable: true })
  nro: string | null                        

  @Column({ length: 100 })
  codigo: string                          

  @Column({ type: 'date', nullable: true })
  fechaArribo: Date | null

  @Column({ length: 100, nullable: true })
  destino: string | null

  @Column({ type: 'date', nullable: true })
  fechaIntervencionAgente: Date | null       

  @Column({ default: true })
  activo: boolean

  @Column({ length: 100, nullable: true })
  creadoPor: string | null

  @CreateDateColumn()
  fechaCreacion: Date

  @UpdateDateColumn({ nullable: true })
  fechaModificacion: Date | null

  @Column({ type: 'timestamp', nullable: true })
  fechaBaja: Date | null

  @Column({ length: 100, nullable: true })
  dadoDeBajaPor: string | null

  @Column({ length: 100, nullable: true })
  modificadoPor: string | null

  @OneToMany(() => VehiculoRubro, (vr) => vr.vehiculo)
  rubros: VehiculoRubro[]
}
