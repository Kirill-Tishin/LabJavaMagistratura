import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import { CafeListComponent } from './cafe/cafe-list/cafe-list.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'cafe_list', component: CafeListComponent},
  {path: '', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
