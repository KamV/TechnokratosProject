import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'technokratos-project';

  onActivate(event) {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}
