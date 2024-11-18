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

    if (month < 1 || month > 12 || day < 1) return false;

    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (day > daysInMonth[month - 1]) return false;

    // Verificar año bisiesto para el mes de febrero
    if (month === 2 && year % 4 === 0) {
      if (year % 100 !== 0 || year % 400 === 0) {
        if (day > 29) return false;
      } else if (day > 28) return false;
    }

    const currentYear = new Date().getFullYear();
    return year >= 1900 && year <= currentYear;
  }
}
