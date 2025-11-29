import { Component, Output, EventEmitter, Input, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subject, debounceTime, takeUntil } from 'rxjs';

@Component({
  selector: 'app-stock-search-2',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './stock-search-2.component.html',
  styleUrl: './stock-search-2.component.css'
})
export class StockSearchComponent implements OnInit, OnDestroy {
  @Input() placeholder: string = 'Tìm kiếm cổ phiếu...';
  @Output() search = new EventEmitter<string>();
  searchTerm: string = '';

  private searchSubject = new Subject<string>();
  private destroy$ = new Subject<void>();

  ngOnInit(): void {  
    this.searchSubject
      .pipe(debounceTime(300), takeUntil(this.destroy$))
      .subscribe((term) => this.search.emit(term));
  }

  onSearch(): void {
    this.searchSubject.next(this.searchTerm);
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.onSearch();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
