import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Gasto } from '../gastos';
import { log } from 'console';

@Component({
  selector: 'app-gastos',
  standalone: true,
  imports: [],
  templateUrl: './gastos.component.html',
  styleUrl: './gastos.component.css'
})
export class GastosComponent {
  @Input({required: true}) gasto!: Gasto;   // Metodos de input y output
  @Output()emitirEvento = new EventEmitter<Gasto>(); 


  eventoEliminar(gasto: Gasto) {
    this.emitirEvento.emit(gasto);
    console.log({gasto});
    
  }
}

