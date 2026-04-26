
export enum EstadoVerificacion {
  Pendiente  =  0,
  EnCurso    = -1,
  Finalizado =  1
}

export enum Canal {
  Rojo  = 0,
  Verde = 1
}

export enum Rol {
  Admin     = 'admin',
  Logistica = 'logistica'
}

export interface Rubro {
  id: number
  nombre: string
  activo: boolean
}

export interface Vehiculo {
  id: number
  nro: string | null
  codigo: string
  fechaArribo: Date | null
  destino: string | null
  fechaIntervencionAgente: Date | null
  activo: boolean
  creadoPor: string | null
  fechaCreacion: Date
  fechaModificacion: Date | null
  fechaBaja: Date | null
  dadoDeBajaPor: string | null
  modificadoPor: string | null
}

export interface VehiculoRubro {
  id: number
  vehiculoId: number
  rubroId: number
  numero: string | null
  canal: Canal | null                        
  fechaAutorizacion: Date | null
  autorizacionConfirmada: boolean            
  fechaEnvioDocumentacion: Date | null
  documentacionConfirmada: boolean          
  observacion: string | null
  unidades: number | null                   
  bultos: number | null
  estadoVerificacion: EstadoVerificacion    
  fechaInicioVerif: Date | null
  fechaEstFinVerif: Date | null
  entregadoAlLocal: Date | null
  observacionPrioridad: string | null
  ubicacion: string | null
  observacionDificultades: string | null
  creadoPor: string | null
  fechaCreacion: Date
  fechaModificacion: Date | null
  modificadoPor: string | null
}

export interface Usuario {
  id: number
  nombreUsuario: string
  passwordHash: string                     
  rol: Rol
  activo: boolean
  fechaCreacion: Date
}

export interface Auditoria {
  id: number
  vehiculoId: number | null
  rubroId: number | null
  nombreRubro: string | null
  accion: string                            
  creadoPor: string | null
  modificadoPor: string | null
  fechaBaja: Date | null
  dadoDeBajaPor: string | null
  detalle: string | null
  fechaAccion: Date
  registroId: number | null
  tabla: string | null                      
  usuarioNombre: string | null
  datosAnteriores: string | null         
  datosNuevos: string | null               
}

export interface VehiculoDetalle extends Vehiculo {
  rubros: VehiculoRubroDetalle[]
}

export interface VehiculoRubroDetalle extends VehiculoRubro {
  rubro: Rubro
}
