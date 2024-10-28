import { Component } from '@angular/core';
import { Operacion } from '../../../models/Operacion';
import { OperacionServiceService } from '../../services/operacion-service.service';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent   {

  list : Operacion [] = new OperacionServiceService().getList() 

  

}
