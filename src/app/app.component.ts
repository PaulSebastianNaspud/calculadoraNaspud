import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { ListComponent } from './pages/list/list.component';
import { OperacionServiceService } from './services/operacion-service.service';
import { Operacion } from '../models/Operacion';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalculadoraComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'calculadoraNaspud';
  constructor (private operacion  = new  OperacionServiceService()){}
  @ViewChild("list") listCourse! : ListComponent

  async addCourse(operacion: Operacion) {
    const newListCourse: Operacion[] = this.operacion.getList();
    this.listCourse.list = [];
    this.listCourse.list = newListCourse;
  }
   

        
  
}
