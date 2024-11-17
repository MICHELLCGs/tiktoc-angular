import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  @Input() icon: string = '';
  @Input() label: string = '';
  searchText: string = '';
  

  // Este método se llama cada vez que el usuario escribe algo
  onSearch() {
    console.log("Texto de búsqueda:", this.searchText);
    // Aquí puedes hacer lo que necesites con el texto (ejemplo: filtrar datos)
  }
}
