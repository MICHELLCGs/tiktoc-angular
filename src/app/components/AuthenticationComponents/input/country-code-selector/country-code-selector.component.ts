import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-country-code-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './country-code-selector.component.html',
  styleUrls: ['./country-code-selector.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CountryCodeSelectorComponent),
      multi: true,
    },
  ],
})
export class CountryCodeSelectorComponent implements ControlValueAccessor {
  @Input() selectedCountryCode: string = '+51';
  @Output() countryCodeChange = new EventEmitter<string>();

  countryCodes: { code: string, country: string }[] = [
    { code: '+51', country: 'PE' },
    { code: '+55', country: 'BR' },
    // Agrega más países aquí
  ];

  onCountryCodeChange(event: any) {
    const value = event.target.value;
    this.countryCodeChange.emit(value);
    this.onChange(value); // Notifica el cambio al modelo
  }

  writeValue(value: string): void {
    this.selectedCountryCode = value || this.selectedCountryCode;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn; // Registra el callback para cambios
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn; // Registra el callback para "tocado"
  }

  setDisabledState?(isDisabled: boolean): void {}

  // Funciones necesarias para ControlValueAccessor
  private onChange = (value: string) => {};
  private onTouched = () => {};
}
