import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Gasto } from './gastos';
import { GastosComponent } from './gastos/gastos.component';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,GastosComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'proyecto_ngshe';
  nombreGasto = "";
  cantidadGasto = 10;
  gastos: Gasto[] = [];
  presupuesto = 0;
  saldo = 0;
  saldoInicialIngresado = false;

  ingresarSaldoInicial(): void {
    this.saldo = this.presupuesto;
    this.saldoInicialIngresado = true;
  }

  agregarGasto(): void {
    const gasto = new Gasto(this.nombreGasto, this.cantidadGasto);
    this.gastos.push(gasto);
    this.saldo = this.saldo - gasto.cantidad;
    this.nombreGasto = "";
    this.cantidadGasto = 0;
  }


  eliminarGasto(indiceGasto: number, cantidadGasto: number): void {
    this.gastos.splice(indiceGasto, 1);
    this.saldo += cantidadGasto;
  }

  
  
}
