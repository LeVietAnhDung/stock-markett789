import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-stock-reactive',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-stock-reactive.component.html',
  styleUrls: ['./create-stock-reactive.component.css']
})
export class CreateStockReactiveComponent {
  stockForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.stockForm = this.fb.group({
      name: ['', Validators.required],
      code: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.min(1)]],
    });
  }

  submitStock() {
    if (this.stockForm.valid) {
      console.log('Form Control value:', this.stockForm.value);
      console.log('Form Control status:', this.stockForm.status);
    }
  }

  loadStockServer() {
    const stockData = {
      name: 'Stock',
      code: 'SS123',
      price: 100,
    };
    this.stockForm.setValue(stockData);
  }

  patchStockForm() {
    this.stockForm.patchValue({ price: 150 });
  }
}
