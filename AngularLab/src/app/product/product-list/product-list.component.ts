import {Component, OnInit} from '@angular/core';
import {Order} from '../../entity/Order';
import {OrderService} from '../../sevices/order.service';
import {AuthenticationService} from '../../authentication/authentication.service';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {OrderEditComponent} from '../../order/order-edit/order-edit.component';
import {Product} from '../../entity/Product';
import {ProductService} from '../../sevices/product.service';
import {ProductEditComponent} from '../product-edit/product-edit.component';
import {CafeAddComponent} from "../../cafe/cafe-add/cafe-add.component";
import {ProductAddComponent} from "../product-add/product-add.component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService,
              private authService: AuthenticationService,
              private matDialog: MatDialog,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
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
  updateProduct(id: number) {
    const dialogRef = this.matDialog.open(ProductEditComponent, {
      hasBackdrop: true,
      data: {productData: this.findProductById(id)}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getProducts();
      this.matDialog.closeAll();
    });
  }

  private findProductById(id: number): Product {
    // tslint:disable-next-line:triple-equals
    return this.products.filter(product => product.idProduct === id)[0];
  }

  addProduct(): void {
    const dialogRef = this.matDialog.open(ProductAddComponent, {
      hasBackdrop: true
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getProducts();
      this.matDialog.closeAll();
    });
  }

  deleteProduct(id: number): void {
    debugger;
    this.productService.deleteProduct(id)
      .subscribe(data => {
        console.log(data);
      }, error => console.log(error));
  }
}
