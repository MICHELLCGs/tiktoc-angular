import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registermain',
  templateUrl: './registermain.component.html',
  styleUrls: ['./registermain.component.css']
})
export class RegistermainComponent {

  constructor(private router: Router) {}

  // Método para validar la fecha
  isValidDate(day: number, month: number, year: number): boolean {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (day < 1 || day > daysInMonth[month - 1]) {
      return false;
    }

    if (month === 2 && year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      if (day > 29) {
        return false;
      }
    }

    return true;
  }

  // Método llamado al enviar el formulario
  onSubmit(event: any) {
    event.preventDefault();  // Evitar el comportamiento por defecto del formulario

    const formData = new FormData(event.target);
    
    // Extraer los valores del formulario
    const email = formData.get('email');
    const password = formData.get('password');
    const name = formData.get('name');
    const gender = formData.get('gender');
    const phone = formData.get('phone');
    const dobDay = parseInt(formData.get('dobDay') as string, 10);
    const dobMonth = parseInt(formData.get('dobMonth') as string, 10);
    const dobYear = parseInt(formData.get('dobYear') as string, 10);

    // Validar la fecha
    if (!this.isValidDate(dobDay, dobMonth, dobYear)) {
      alert('La fecha ingresada no es válida. Verifica el día, mes o año.');
      return;
    }

    // Si todo está bien, redirigir a la página de validación
    this.router.navigate(['/validacion']);
  }
}









