import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pregunta2',
  templateUrl: './pregunta2.component.html',
  styleUrls: ['./pregunta2.component.css'],
})
export class Pregunta2Component {
  horasTrabajadas: number = 0;
  salario: number | undefined;

  calcularSalario() {
    const salarioBase = 16; // Salario por hora para las primeras 40 horas
    const salarioExtra = 20; // Salario por hora extra (más de 40 horas)

    if (this.horasTrabajadas <= 40) {
      this.salario = this.horasTrabajadas * salarioBase;
    } else {
      const horasNormales = 40;
      const horasExtras = this.horasTrabajadas - horasNormales;

      this.salario = horasNormales * salarioBase + horasExtras * salarioExtra;
    }
  }
}