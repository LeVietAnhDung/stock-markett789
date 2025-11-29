import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { CreateStock2Component } from './stock/create-stock-2/create-stock-2.component';
import { CreateStockReactiveComponent } from './create-stock-reactive/create-stock-reactive.component';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { StockList2Component } from './stock/stock-list-2/stock-list-2.component';
import { RegisterComponent } from './register/register.component';
import { PostDataComponent } from './post-data/post-data.component';
import { GetDataComponent } from './get-data/get-data.component';
import { UserService } from './services/user.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'stocks/create', component: CreateStockComponent },
  { path: 'stocks/create-2', component: CreateStock2Component },
  { path: 'create-reactive', component: CreateStockReactiveComponent },
  { path: 'stocks/list', component: StockListComponent },
  { path: 'stocks/list-2', component: StockList2Component },
  { path: 'register', component: RegisterComponent },
  { path: 'stocks/post-data', component: PostDataComponent },
  { path: 'stocks/get-data', component: GetDataComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    { provide: UserService, useClass: UserService },
  ],
};