import { Component } from '@angular/core';


@Component({
  selector: 'app-pregunta1',
  templateUrl: './pregunta1.component.html',
  styleUrls: ['./pregunta1.component.css']
})
export class Pregunta1Component {
  precioUnitario: number = 0;
  cantidad: number = 0;
  precioFinal: number | undefined;

  calcularPrecio() {
    if (this.cantidad > 20) {
      this.precioFinal = this.precioUnitario * this.cantidad * 0.9; // Descuento del 10%
    } else if (this.cantidad > 10) {
      this.precioFinal = this.precioUnitario * this.cantidad * 0.95; // Descuento del 5%
    } else {
      this.precioFinal = this.precioUnitario * this.cantidad;
    }
  }
}