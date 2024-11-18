import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {
  constructor() {}

  // Validar correo
  isEmailValid(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  // Validar contraseña
  isPasswordValid(password: string): boolean {
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[-_])[A-Za-z\d-_]{8,14}$/;
    return passwordPattern.test(password);
  }

  // Validar teléfono
  isPhoneValid(phone: string): boolean {
    const phonePattern = /^\d{9}$/;
    return phonePattern.test(phone);
  }

  // Validar nombre
  isNameValid(name: string): boolean {
    const namePattern = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/;
    return namePattern.test(name.trim()) && name.trim().length > 0;
  }

  // Validar fecha de nacimiento
  isDateOfBirthValid(day: number | null, month: number | null, year: number | null): boolean {
    if (day === null || month === null || year === null) return false;

    const date = new Date(`${year}-${month}-${day}`);
    return (
      !isNaN(date.getTime()) &&
      date.getFullYear() === year &&
      month >= 1 &&
      month <= 12 &&
      day >= 1 &&
      day <= 31
    );
  }
}
