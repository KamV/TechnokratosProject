import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'technokratos-project';

  onActivate(event) {
    window.scroll(0,0);
  }
}
