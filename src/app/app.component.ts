import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { firstItem } from '../shared/models/firstItem';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items = [
    new firstItem('Learn Angular1'),
    new firstItem('Learn Angular2', true),
    new firstItem('Learn Angular3')
  ];
  title = 'Ali_1ST_Project';
}
