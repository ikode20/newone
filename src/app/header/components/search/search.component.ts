import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() newSearch = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(term: string, isValid: boolean) {
    if (isValid) {
      this.newSearch.emit(term);
    }
  }

}
