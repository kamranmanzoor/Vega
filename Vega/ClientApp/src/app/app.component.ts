import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vega Angular Client';
  subtitle = '.NET Core + Angular CLI v7 + Bootstrap & FontAwesome + Swagger Template';
  datetime = Date.now();
}
