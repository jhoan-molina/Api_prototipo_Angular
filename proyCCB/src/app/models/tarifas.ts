import { TipoActivo } from "./tipo-activo";

export class Tarifas {
    id!:number;
    tipo_activo!:TipoActivo;
    rango_min!:number;
    rango_max!:number;
    uvt_valor!:number;
    pesos_valor!:number;
}
