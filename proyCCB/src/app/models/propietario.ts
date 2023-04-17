import { TipoId } from "./tipo-id";
import { TipoPersona } from "./tipo-persona";

export class Propietario {

    id!:number;
    tipo_id!:TipoId;
    tipo_persona!:TipoPersona;
    nombre!:String;
    apellido!:String;
    direccion!:String;
    email!:String;
    fecha_registro!:Date;
    estado!:number;

}

export interface Credentials{
    email: String;
    password: String;
}
