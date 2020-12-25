import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {CafeListComponent} from './cafe/cafe-list/cafe-list.component';
import {UserListComponent} from './user/user-list/user-list.component';
import {UserAddComponent} from './user/user-add/user-add.component';
import {UserEditComponent} from './user/user-edit/user-edit.component';
import {EmployeeListComponent} from './empoyee/employee-list/employee-list.component';
import {EmployeeEditComponent} from './empoyee/employee-edit/employee-edit.component';
import {EmployeeAddComponent} from './empoyee/employee-add/employee-add.component';
import {EmployeeDeleteComponent} from './empoyee/employee-delete/employee-delete.component';
import {OrderListComponent} from './order/order-list/order-list.component';
import {OrderAddComponent} from './order/order-add/order-add.component';
import {OrderEditComponent} from './order/order-edit/order-edit.component';
import {OrderDeleteComponent} from './order/order-delete/order-delete.component';
import {CafeDeleteComponent} from './cafe/cafe-delete/cafe-delete.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductAddComponent} from './product/product-add/product-add.component';
import {ProductDeleteComponent} from './product/product-delete/product-delete.component';
import {ProductEditComponent} from './product/product-edit/product-edit.component';
import {CafeAddComponent} from './cafe/cafe-add/cafe-add.component';
import {CafeEditComponent} from './cafe/cafe-edit/cafe-edit.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},

  {path: 'cafes', component: CafeListComponent},
  {path: 'users', component: UserListComponent},
  {path: 'employees', component: EmployeeListComponent},
  {path: 'orders', component: OrderListComponent},
  {path: 'products', component: ProductListComponent},

  {path: 'user-add', component: UserAddComponent},
  {path: 'employee-add', component: EmployeeAddComponent},
  {path: 'order-add', component: OrderAddComponent},
  {path: 'product-add', component: ProductAddComponent},
  {path: 'cafe-add', component: CafeAddComponent},

  {path: 'user-edit', component: UserEditComponent},
  {path: 'employee-edit', component: EmployeeEditComponent},
  {path: 'order-edit', component: OrderEditComponent},
  {path: 'product-edit', component: ProductEditComponent},
  {path: 'cafe-edit', component: CafeEditComponent},

  {path: 'employee-delete', component: EmployeeDeleteComponent},
  {path: 'order-delete', component: OrderDeleteComponent},
  {path: 'cafe-delete', component: CafeDeleteComponent},
  {path: 'product-delete', component: ProductDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
