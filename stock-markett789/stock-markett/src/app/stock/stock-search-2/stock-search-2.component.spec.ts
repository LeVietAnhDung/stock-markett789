import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSearch2Component } from './stock-search-2.component';

describe('StockSearch2Component', () => {
  let component: StockSearch2Component;
  let fixture: ComponentFixture<StockSearch2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockSearch2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockSearch2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
