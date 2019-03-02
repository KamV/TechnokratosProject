import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.styl']
})
export class ContentComponent implements OnInit {

  @Input() title: string;
  @Input() text: string;
  @Input() isNewsDetail: boolean;

  constructor() { }

  ngOnInit() {
  }

}
