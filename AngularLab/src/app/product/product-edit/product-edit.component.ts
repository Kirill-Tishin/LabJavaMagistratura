import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AuthenticationService} from '../../authentication/authentication.service';
import {Router} from '@angular/router';
import {Product} from '../../entity/Product';
import {ProductService} from '../../sevices/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product;
  productId: string;
  products: Product[];

  title: string;
  price: number;
  description: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private matDialogRef: MatDialogRef<ProductEditComponent>,
              private authService: AuthenticationService,
              private router: Router,
              private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    debugger;
    this.product = this.data.productData;
    this.productId = this.product.idProduct.toString();
    this.title = this.product.title;
    this.description = this.product.description;
    this.price = this.product.price;
    this.inputField();
  }

  private inputField(): void {
    this.productService.getProducts().subscribe(data => this.products = data);
  }

  onSubmit(): void {
    this.product.title = this.title;
    this.product.price = this.price;
    this.product.description = this.description;
    this.productService.updateProduct(this.product).subscribe(data => {
      console.log(data);
      this.matDialogRef.close(data);
    }, error => console.log(error));
  }
}
