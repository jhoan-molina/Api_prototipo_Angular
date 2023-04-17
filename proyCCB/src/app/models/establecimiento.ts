import { ActividadEconomica } from "./actividad-economica";
import { Activos } from "./activos";
import { Matricula } from "./matricula";

export class Establecimiento {
    id!:number;
    actividad_economica!:ActividadEconomica;
    nombre!:String;
    direccion!:String;
    activos!:Activos;
    matricula!:Matricula;
    fecha_matricula!:Date;
    estado!:number;
}
