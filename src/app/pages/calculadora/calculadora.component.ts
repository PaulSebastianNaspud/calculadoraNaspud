import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Operacion } from '../../../models/Operacion';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {
  a = 0
  b = 0

  res = 0

  @Output() onCalculate = new EventEmitter<Operacion>()

  sum(){
    this.res = this.a + this.b;
  }
  resta(){
    this.res = this.a - this.b;
  }
  multi(){
    this.res = this.a * this.b;
  }
  div(){
    if(this.b == 0){
      alert("No se puede dividir para 0")
    }
    this.res = this.a / this.b;
  }

  addOpeacion(){
    this.onCalculate.emit(new Operacion(this.res))
  }

}
