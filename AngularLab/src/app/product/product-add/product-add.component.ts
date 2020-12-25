import {Component, Inject, OnInit} from '@angular/core';
import {Product} from "../../entity/Product";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AuthenticationService} from "../../authentication/authentication.service";
import {Router} from "@angular/router";
import {ProductService} from "../../sevices/product.service";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  product = new Product();

  title: string;
  price: number;
  description: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private matDialogRef: MatDialogRef<ProductAddComponent>,
              private authService: AuthenticationService,
              private router: Router,
              private productService: ProductService
  ) {
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.createProduct();
  }

  private createProduct(): void{
    this.product.price = this.price;
    this.product.title = this.title;
    this.product.description = this.description;

    this.productService.createProduct(this.product).subscribe(data => {
      console.log(data);
      this.router.navigate(['products']);
    }, error => console.log(error));
  }
}
