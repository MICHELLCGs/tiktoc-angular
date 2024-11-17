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
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() label: string = ''; 
  @Input() type: string = 'text';
  @Input() name: string = ''; 
  @Input() placeholder: string = ''; 
  @Input() errorMessage: string = ''; 
  @Input() isInvalid: boolean = false; 
  @Input() touched: boolean = false; 
  @Input() showCountrySelector: boolean = false; 
  @Input() selectedCountryCode: string = '+51'; 
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>(); 


  value: string = ''; 
  onChange = (value: string) => { };
  onTouched = () => { }; 

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value); 
    this.valueChange.emit(this.value);
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
    this.updateValue(this.value.split(' ').slice(1).join(' ')); 
  }

  writeValue(value: string): void {
    this.value = value || ''; 
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    
  }
}
