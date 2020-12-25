import {Component, Inject, OnInit} from '@angular/core';
import {Product} from '../../entity/Product';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AuthenticationService} from '../../authentication/authentication.service';
import {Router} from '@angular/router';
import {ProductService} from '../../sevices/product.service';
import {Order} from '../../entity/Order';
import {OrderService} from '../../sevices/order.service';
import {EmployeeService} from '../../sevices/employee.service';
import {Employee} from '../../entity/Employee';
import {Cafe} from '../../entity/Cafe';
import {UserService} from '../../sevices/user.service';
import {User} from '../../entity/User';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent implements OnInit {

  order = new Order();
  numberTable: number;
  employeeId: number;
  employees: Employee[];
  productId: number;
  products: Product[];
  users: User[];
  userId: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private matDialogRef: MatDialogRef<OrderAddComponent>,
              private authService: AuthenticationService,
              private router: Router,
              private orderService: OrderService,
              private productService: ProductService,
              private employeeServeci: EmployeeService,
              private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.fillEmployee();
    this.fillProduct();
    this.fillUser();
  }

  onSubmit(): void {
    this.createOrder();
  }

  private fillEmployee(): void {
    this.employeeServeci.getEmployees().subscribe(data => this.employees = data);
  }

  private chooseEmployee(id: number): Employee {
    // tslint:disable-next-line:triple-equals
    return this.employees.filter(employee => employee.idEmployee == id)[0];
  }

  private fillProduct(): void {
    this.productService.getProducts().subscribe(data => this.products = data);
  }

  private chooseProduct(id: number): Product {
    // tslint:disable-next-line:triple-equals
    return this.products.filter(product => product.idProduct == id)[0];
  }

  private chooseUser(id: number): User {
    // tslint:disable-next-line:triple-equals
    return this.users.filter(user => user.idUser == id)[0];
  }

  private fillUser(): void {
    this.userService.getUsers().subscribe(data => this.users = data);
  }

  private createOrder(): void {
    debugger;
    this.order.numberTable = this.numberTable;
    this.order.sum = this.chooseProduct(this.productId).price;
    //this.order.userTable = this.getUser(this.authService.getUsername());
    this.order.userTable = this.chooseUser(this.userId);
    this.order.employee = this.chooseEmployee(this.employeeId);
    this.order.product = this.chooseProduct(this.productId);
    this.orderService.createOrder(this.order).subscribe(data => {
      console.log(data);
      this.router.navigate(['orders']);
    }, error => console.log(error));
  }

}
