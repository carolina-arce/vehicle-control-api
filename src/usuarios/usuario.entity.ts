import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'
import { Rol } from '../common/enums/rol.enum'

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 100, unique: true })
  nombreUsuario: string

  @Column({ length: 500 })
  passwordHash: string                      

  @Column({ type: 'varchar', length: 50, default: Rol.Logistica })
  rol: Rol

  @Column({ default: true })
  activo: boolean

  @CreateDateColumn()
  fechaCreacion: Date
}
