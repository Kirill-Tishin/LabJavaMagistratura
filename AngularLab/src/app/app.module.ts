import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpInterceptorService} from './authentication/http-interceptor.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {CafeListComponent} from './cafe/cafe-list/cafe-list.component';
import {CafeAddComponent} from './cafe/cafe-add/cafe-add.component';
import {CafeEditComponent} from './cafe/cafe-edit/cafe-edit.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { EmployeeListComponent } from './empoyee/employee-list/employee-list.component';
import { EmployeeEditComponent } from './empoyee/employee-edit/employee-edit.component';
import { EmployeeAddComponent } from './empoyee/employee-add/employee-add.component';
import { EmployeeDeleteComponent } from './empoyee/employee-delete/employee-delete.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderAddComponent } from './order/order-add/order-add.component';
import { OrderEditComponent } from './order/order-edit/order-edit.component';
import { OrderDeleteComponent } from './order/order-delete/order-delete.component';
import { CafeDeleteComponent } from './cafe/cafe-delete/cafe-delete.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductDeleteComponent } from './product/product-delete/product-delete.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CafeListComponent,
    CafeAddComponent,
    CafeEditComponent,
    UserListComponent,
    UserAddComponent,
    UserEditComponent,
    EmployeeListComponent,
    EmployeeEditComponent,
    EmployeeAddComponent,
    EmployeeDeleteComponent,
    OrderListComponent,
    OrderAddComponent,
    OrderEditComponent,
    OrderDeleteComponent,
    CafeDeleteComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductDeleteComponent,
    ProductEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent],
  entryComponents: [CafeListComponent]
})
export class AppModule {
}
