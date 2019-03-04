import { Component, OnInit } from '@angular/core';

import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.styl'],
  animations: [
    trigger("collapseAnimation", [
         state('void', style({
            height: '0px',
            overflow: 'hidden'
         })),
         state('*', style({
            height: '*'
         })),

         transition('void <=> *', animate('700ms ease-in'))
      ])
  ]
})

export class NavBarComponent implements OnInit {

  collapseExpanded = false;

  constructor() { }

  ngOnInit() {
  }

  toggleCollapse() {
    this.collapseExpanded = ! this.collapseExpanded;
  }

}
