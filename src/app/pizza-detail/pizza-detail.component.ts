import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css']
})
export class PizzaDetailComponent implements OnInit {

  pizza: Pizza;
  constructor(
    private activateRoute: ActivatedRoute,
    private location: Location,
    private pizzaService: PizzaService
  ) { }

  ngOnInit() {
    this.getPizza();
  }

  getPizza(): void {
    const id = +this.activateRoute.snapshot.paramMap.get('id');
    this.pizzaService.getPizza(id)
        .subscribe(pizza => this.pizza = pizza);
  }

  back(): void {
    this.location.back();
  }

}
