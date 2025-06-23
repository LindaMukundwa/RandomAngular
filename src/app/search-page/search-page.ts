import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-google-search',
  templateUrl: './search-page.html',
  styleUrls: ['./search-page.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class SearchComponent {
  searchQuery: string = '';
  isInputFocused: boolean = false;

  @ViewChild('searchInput') searchInput!: ElementRef;

  onSearchPeople(): void {
    if (this.searchQuery.trim()) {
      // In a real app, you would navigate to search results
      alert(`Searching for: ${this.searchQuery}`);
      // Example: this.router.navigate(['/search'], { queryParams: { q: this.searchQuery } });
    }
  }

  onSearchEvents(): void {
    if (this.searchQuery.trim()) {
      // might make this the default
      alert(`I'm Feeling Lucky with: ${this.searchQuery}`);
    } else {
      // Google's "I'm Feeling Lucky" without query takes you to their doodles page
      //window.location.href = 'https://www.google.com/doodles';
    }
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.searchInput.nativeElement.focus();
  }

  onInputFocus(): void {
    this.isInputFocused = true;
  }

  onInputBlur(): void {
    this.isInputFocused = false;
  }
}
