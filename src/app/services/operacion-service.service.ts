import { Injectable } from '@angular/core';
import { Operacion } from '../../models/Operacion';

@Injectable({
  providedIn: 'root'
})
export class OperacionServiceService {

  constructor() { }

 
    static key = 'operacion';

  
    getList(): Operacion[] {
        const listaString = localStorage.getItem(OperacionServiceService.key);
        if (!listaString) {
            return []; 
        }
        const listaJson = JSON.parse(listaString);
        return listaJson.map((cursoJson: any) => Operacion.fromJson(cursoJson));
    }

    saveList(listaCursos: Operacion[]): void {
        const listaString = JSON.stringify(listaCursos);
        localStorage.setItem(OperacionServiceService.key, listaString);
    }

    addCourse(curso: Operacion): void {
        const listaCursos = this.getList(); 
        listaCursos.push(curso); 
        this.saveList(listaCursos); 
    }
}
