import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../authentication/authentication.service';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {OrderService} from '../../sevices/order.service';
import {OrderEditComponent} from '../order-edit/order-edit.component';
import {Order} from '../../entity/Order';
import {OrderAddComponent} from "../order-add/order-add.component";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[];

  constructor(private orderService: OrderService,
              private authService: AuthenticationService,
              private matDialog: MatDialog,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getOrders();
  }

  private getOrders(): void {
    this.orderService.getOrders().subscribe(data => {
      this.orders = data;
    }, error => {
      if (error.status === 401) {
        this.router.navigate(['']);
      }
    });
  }

  userLogout(): void {
    this.authService.logout();
    this.router.navigate(['']);
  }

  // tslint:disable-next-line:typedef
  updateOrder(id: number) {
    const dialogRef = this.matDialog.open(OrderEditComponent, {
      hasBackdrop: true,
      data: {orderData: this.findOrderById(id)}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getOrders();
      this.matDialog.closeAll();
    });
  }

  private findOrderById(id: number): Order {
    // tslint:disable-next-line:triple-equals
    return this.orders.filter(order => order.idOrder === id)[0];
  }

  addOrder(): void {
    const dialogRef = this.matDialog.open(OrderAddComponent, {
      hasBackdrop: true
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getOrders();
      this.matDialog.closeAll();
    });
  }

  deleteOrder(id: number): void {
    debugger;
    this.orderService.deleteOrder(id)
      .subscribe(data => {
        console.log(data);
      }, error => console.log(error));
  }
}
