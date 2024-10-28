export class Operacion {
    constructor(public respuesta : number){

    }
    static fromJson(json:any): Operacion {
        return new Operacion(json.respuesta);
    }
}