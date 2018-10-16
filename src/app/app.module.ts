import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { NgxPayPalModule } from 'ngx-paypal';


import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaDetailComponent } from './pizza-detail/pizza-detail.component';

const appRoutes: Routes = [
  { path: 'pizzas', component: PizzaListComponent },
  { path: 'pizzas/:id', component: PizzaDetailComponent },
  { path: '', redirectTo: '/pizzas', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzaListComponent,
    PizzaDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPayPalModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
