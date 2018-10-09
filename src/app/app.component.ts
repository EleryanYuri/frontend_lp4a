import { Component } from '@angular/core';
import {Pizza} from "../app/pizza"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pizzaParent: Array<Pizza> = [
    {name: "marguerite", price: 12, url: "https://media.istockphoto.com/photos/pizza-on-white-background-picture-id635675852"},
    {name: "reine", price: 10, url: "https://thumbs.dreamstime.com/z/pizza-16727090.jpg"},
]
}