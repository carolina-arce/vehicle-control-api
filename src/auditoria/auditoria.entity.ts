import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'

@Entity('auditoria')
export class Auditoria {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  vehiculoId: number | null

  @Column({ nullable: true })
  rubroId: number | null

  @Column({ length: 100, nullable: true })
  nombreRubro: string | null

  @Column({ length: 50 })
  accion: string                           

  @Column({ length: 100, nullable: true })
  creadoPor: string | null

  @Column({ length: 100, nullable: true })
  modificadoPor: string | null

  @Column({ type: 'timestamp', nullable: true })
  fechaBaja: Date | null

  @Column({ length: 100, nullable: true })
  dadoDeBajaPor: string | null

  @Column({ length: 1000, nullable: true })
  detalle: string | null

  @CreateDateColumn()
  fechaAccion: Date

  @Column({ nullable: true })
  registroId: number | null

  @Column({ length: 100, nullable: true })
  tabla: string | null                      

  @Column({ length: 100, nullable: true })
  usuarioNombre: string | null

  @Column({ type: 'text', nullable: true })
  datosAnteriores: string | null           

  @Column({ type: 'text', nullable: true })
  datosNuevos: string | null            
}
