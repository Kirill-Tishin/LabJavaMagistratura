import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NgModule} from '@angular/core';
import {SaleListComponent} from './sale/sale-list.component';
import {AddSaleComponent} from './sale/add-sale/add-sale.component';
import {CarListComponent} from './car/car-list/car-list.component';
import {AddCarComponent} from './car/add-car/add-car.component';

const routes: Routes = [
  {path: 'sales', component: SaleListComponent},
  {path: 'cars', component: CarListComponent},
  {path: 'create-car', component: AddCarComponent},
  {path: 'create-sale', component: AddSaleComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
