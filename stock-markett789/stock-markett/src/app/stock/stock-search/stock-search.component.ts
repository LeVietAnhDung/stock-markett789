import { Component, EventEmitter, Output, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.css']
})
export class StockSearchComponent {
  @Output() searchKeyword = new EventEmitter<string>();
  @ViewChild('searchInput') searchInput!: ElementRef;

  onSearch(keyword: string) { // Thay đổi tham số thành string
    this.searchKeyword.emit(keyword.trim());
  }
}
