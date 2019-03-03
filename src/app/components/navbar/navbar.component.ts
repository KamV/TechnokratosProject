import { Component, OnInit } from '@angular/core';

import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.styl'],
  animations: [
    trigger("collapseAnimation", [
         state('collapsed', style({
            height: '0px',
            overflow: 'hidden'
         })),
         state('expanded', style({
            height: '*'
         })),

         transition('collapsed <=> expanded', animate('700ms ease-in'))
      ])
  ]
})

export class NavBarComponent implements OnInit {

  state: string = 'collapsed';

  constructor() { }

  ngOnInit() {
  }

  toggleCollapse() {
    this.state = this.state === 'collapsed' ? 'expanded' : 'collapsed';
  }

}
