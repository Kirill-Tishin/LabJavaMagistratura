import { Component, OnInit } from '@angular/core';
import {CafeService} from '../../sevices/cafe.service';
import {AuthenticationService} from '../../authentication/authentication.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
