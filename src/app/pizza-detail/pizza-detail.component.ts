import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';
import { OrderService } from '../REST';


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
    private pizzaService: PizzaService,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.getPizza();
    this.initConfig();
  }

  getPizza(): void {
    const id = +this.activateRoute.snapshot.paramMap.get('id');
    this.pizzaService.getPizza(id)
        .subscribe(pizza => this.pizza = pizza);
  }

  back(): void {
    this.location.back();
  }

  public payPalConfig?: PayPalConfig;

  private initConfig(): void {
    this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {
      commit: true,
      client: {
        sandbox: 'ASnEfuNv0yvZqlCfPT6geLrWuQpYnjdBUcRi7eeUiOb5D3NEWyBAZDancLcLQPlIXNB1UG40JN2weX22'
      },
      button: {
        label: 'paypal',
      },
      onPaymentComplete: (data, actions) => {
        console.log('OnPaymentComplete');
        console.log(data, actions)
      },
      onCancel: (data, actions) => {
        console.log('OnCancel');
      },
      onError: (err) => {
        console.log('OnError');
      },
      transactions: [{
        amount: {
          currency: 'EUR',
          total: 12
        }
      }]
    });
  }
}
