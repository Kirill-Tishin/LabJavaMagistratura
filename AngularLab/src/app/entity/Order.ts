import {Employee} from './Employee';
import {Product} from './Product';
import {User} from './User';

export class Order {
  idOrder: number;
  sum: number;
  title: string;
  numberTable: number;
  employee: Employee;
  product: Product;
  userTable: User;
}
