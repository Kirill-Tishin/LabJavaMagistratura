import {Employee} from './Employee';
import {Product} from './Product';
import {User} from './User';

export class Order {
  idOrder: number;
  Sum: number;
  Title: string;
  NumberTable: number;
  employee: Employee;
  product: Product;
  userTable: User;
}
