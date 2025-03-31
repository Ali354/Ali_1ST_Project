import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { firstItem } from '../shared/models/firstItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    CommonModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items :firstItem[] = [
    new firstItem('Learn Angular1'),
    new firstItem('Learn Angular2', true),
    new firstItem('Learn Angular3')
  ];
  title = 'Ali_1ST_Project';
  NewItemText = '';
  toggleItem(item : firstItem){
    item.isCompleted = !item.isCompleted;
    console.log(item)
  }
  addnewItem(){
    this.items.push(new firstItem(this.NewItemText));
    // this.NewItemText='';
  }
}
