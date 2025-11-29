import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-create-stock',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent {
  stock = {
    name: '',
    code: '',
    price: 0,
    exchange: 'NASDAQ',
    favorite: false
  };

  isNameValid = false;
  isCodeEdited = false;
  isPriceTouched = false;
  confirmed = false;
  stockList: any[] = [];

  validateName() {
    this.isNameValid = this.stock.name.trim().length > 0;
  }

  handleCodeChange() {
    this.isCodeEdited = true;
  }

  handlePriceBlur() {
    this.isPriceTouched = true;
  }

  createStock() {
    this.stockList.push({ ...this.stock });
    this.confirmed = true;
  }
}
