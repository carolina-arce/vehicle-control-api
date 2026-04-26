import {
  Entity, PrimaryGeneratedColumn, Column,
  ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn,
} from 'typeorm'
import { Vehiculo } from '../vehiculos/vehiculo.entity'
import { Rubro } from '../rubros/rubro.entity'
import { EstadoVerificacion } from '../common/enums/estado-verificacion.enum'
import { Canal } from '../common/enums/canal.enum'

@Entity('vehiculo_rubros')
export class VehiculoRubro {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => Vehiculo, (v) => v.rubros)
  @JoinColumn({ name: 'vehiculoId' })
  vehiculo: Vehiculo

  @Column()
  vehiculoId: number

  @ManyToOne(() => Rubro, (r) => r.vehiculoRubros)
  @JoinColumn({ name: 'rubroId' })
  rubro: Rubro

  @Column()
  rubroId: number

  @Column({ length: 10, nullable: true })
  numero: string | null

  @Column({ type: 'int', nullable: true })
  canal: Canal | null                       

  @Column({ type: 'date', nullable: true })
  fechaAutorizacion: Date | null

  @Column({ default: false })
  autorizacionConfirmada: boolean            

  @Column({ type: 'date', nullable: true })
  fechaEnvioDocumentacion: Date | null

  @Column({ default: false })
  documentacionConfirmada: boolean         

  @Column({ length: 500, nullable: true })
  observacion: string | null

  @Column({ type: 'decimal', precision: 18, scale: 2, nullable: true })
  unidades: number | null                   

  @Column({ type: 'int', nullable: true })
  bultos: number | null

  @Column({ type: 'int', default: EstadoVerificacion.Pendiente })
  estadoVerificacion: EstadoVerificacion    

  @Column({ type: 'date', nullable: true })
  fechaInicioVerif: Date | null

  @Column({ type: 'date', nullable: true })
  fechaEstFinVerif: Date | null

  @Column({ type: 'date', nullable: true })
  entregadoAlLocal: Date | null

  @Column({ length: 500, nullable: true })
  observacionPrioridad: string | null

  @Column({ length: 200, nullable: true })
  ubicacion: string | null

  @Column({ length: 500, nullable: true })
  observacionDificultades: string | null

  @Column({ length: 100, nullable: true })
  creadoPor: string | null

  @CreateDateColumn()
  fechaCreacion: Date

  @UpdateDateColumn({ nullable: true })
  fechaModificacion: Date | null

  @Column({ length: 100, nullable: true })
  modificadoPor: string | null
}
