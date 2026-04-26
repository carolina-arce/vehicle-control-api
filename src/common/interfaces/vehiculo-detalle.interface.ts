import { Vehiculo } from '../../vehiculos/vehiculo.entity'
import { VehiculoRubro } from '../../vehiculo-rubros/vehiculo-rubro.entity'
import { Rubro } from '../../rubros/rubro.entity'

export interface VehiculoDetalle extends Vehiculo {
  rubros: VehiculoRubroDetalle[]
}

export interface VehiculoRubroDetalle extends VehiculoRubro {
  rubro: Rubro
}