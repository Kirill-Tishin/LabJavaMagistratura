import { Component, OnInit } from '@angular/core';
import {Order} from "../../entity/Order";
import {Employee} from "../../entity/Employee";
import {Product} from "../../entity/Product";
import {User} from "../../entity/User";

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {


  order = new Order();

  numberTable: number;
  sum: number;
  userName: string;

  employeeId: number;
  employees: Employee[];
  productId: number;
  products: Product[];

  userId: number;
  users: User[];


  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
  }

}
