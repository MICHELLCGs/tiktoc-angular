import {Component,Input,Output,EventEmitter,forwardRef,} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ControlValueAccessor,NG_VALUE_ACCESSOR,} from '@angular/forms';
import { CountryCodeSelectorComponent } from '../country-code-selector/country-code-selector.component';


@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, CountryCodeSelectorComponent],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true, // Permite registrar múltiples proveedores
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() label: string = ''; // Etiqueta del input
  @Input() type: string = 'text'; // Tipo de input (text, email, password, etc.)
  @Input() name: string = ''; // Nombre del input
  @Input() placeholder: string = ''; // Placeholder del input
  @Input() errorMessage: string = ''; // Mensaje de error
  @Input() isInvalid: boolean = false; // Si es inválido
  @Input() touched: boolean = false; // Si fue tocado
  @Input() showCountrySelector: boolean = false; // Propiedad para mostrar el selector
  @Input() selectedCountryCode: string = '+51'; // Código de país seleccionado
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>(); // Emitir cambios al valor


  value: string = ''; // Valor interno del input
  onChange = (value: string) => { }; // Función para manejar cambios
  onTouched = () => { }; // Función para marcar como "tocado"

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value); // Notifica el cambio al modelo
    this.valueChange.emit(this.value); // Notifica el cambio al padre
  }

  updateValue(phoneNumber: string): void {
    this.value = this.showCountrySelector
      ? `${this.selectedCountryCode} ${phoneNumber}`
      : phoneNumber;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  onCountryCodeChange(countryCode: string): void {
    this.selectedCountryCode = countryCode;
    this.updateValue(this.value.split(' ').slice(1).join(' ')); // Mantén el número actual
  }

  writeValue(value: string): void {
    this.value = value || ''; // Actualiza el valor desde el modelo
  }

  registerOnChange(fn: any): void {
    this.onChange = fn; // Registra el callback para cambios
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn; // Registra el callback para "tocado"
  }

  setDisabledState?(isDisabled: boolean): void {
    // Lógica opcional para deshabilitar el componente
  }
}
