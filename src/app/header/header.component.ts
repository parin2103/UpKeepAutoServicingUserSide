import { Component, OnInit } from '@angular/core';
import { slot } from '../Class/slots_class';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  availSlots:slot[]=[];
  constructor() { }

  ngOnInit() {
  }

}
