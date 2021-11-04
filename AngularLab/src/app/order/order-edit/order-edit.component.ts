import {Component, Inject, OnInit} from '@angular/core';
import {Order} from "../../entity/Order";
import {Employee} from "../../entity/Employee";
import {Product} from "../../entity/Product";
import {User} from "../../entity/User";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AuthenticationService} from "../../authentication/authentication.service";
import {Router} from "@angular/router";
import {ProductService} from "../../sevices/product.service";
import {OrderService} from "../../sevices/order.service";
import {UserService} from "../../sevices/user.service";
import {EmployeeService} from "../../sevices/employee.service";

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  order = new Order();
  numberTable: number;
  orders: Order[];
  employee: Employee;
  orderId: string;
  employeeId: number;
  employees: Employee[];
  productId: number;
  products: Product[];

  product: Product;
  user: User;

  userId: number;
  users: User[];


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private matDialogRef: MatDialogRef<OrderEditComponent>,
              private authService: AuthenticationService,
              private router: Router,
              private productService: ProductService,
              private orderService: OrderService,
              private userService: UserService,
              private employeeService: EmployeeService
  ) {
  }

  ngOnInit(): void {
    debugger;
    this.order = this.data.orderData;
    this.orderId = this.order.idOrder.toString();
    this.product = this.order.product;
    this.user = this.order.userTable;
    this.employee = this.order.employee;
    this.numberTable = this.order.numberTable;
    this.inputField();
  }

  private chooseProduct(id: number): Product {
    // tslint:disable-next-line:triple-equals
    return this.products.filter(product => product.idProduct == id)[0];
  }

  private chooseUser(id: number): User {
    // tslint:disable-next-line:triple-equals
    return this.users.filter(user => user.idUser == id)[0];
  }

  private chooseEmployee(id: number): Employee {
    // tslint:disable-next-line:triple-equals
    return this.employees.filter(employee => employee.idEmployee == id)[0];
  }

  private inputField(): void {
    debugger;
    this.orderService.getOrders().subscribe(data => this.orders = data);
    this.productService.getProducts().subscribe(data => this.products = data);
    this.userService.getUsers().subscribe(data => this.users = data);
    this.employeeService.getEmployees().subscribe(data => this.employees = data);
  }

  onSubmit(): void {
    debugger;
    this.order.numberTable = this.numberTable;
    this.order.sum = this.chooseProduct(this.productId).price;
    this.order.userTable = this.chooseUser(this.userId);
    this.order.employee = this.chooseEmployee(this.employeeId);
    this.order.product = this.chooseProduct(this.productId);
    this.orderService.updateOrder(this.order).subscribe(data => {
      console.log(data);
      this.matDialogRef.close(data);
    }, error => console.log(error));
  }

}
