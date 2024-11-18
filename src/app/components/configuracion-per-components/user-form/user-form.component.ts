import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  profilePicture: string | ArrayBuffer | null = null;
  userData = {
    name: '',
    email: '',
    password: '',
    gender: '',
    phone: '',
    birthDay: '',
    birthMonth: '',
    birthYear: ''
  };

  onFileSelected(file: File): void {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.profilePicture = e.target?.result || null;
    };
    reader.readAsDataURL(file);
  }

  onUserDataChange(updatedData: any): void {
    this.userData = updatedData;
  }

  onSave(): void {
    console.log('Datos guardados:', this.userData, this.profilePicture);
    alert('Cambios guardados correctamente.');
  }
}
