import { Component, Input } from '@angular/core';
import { firstItem } from '../shared/models/firstItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddListComponent } from "./add-list/add-list.component";

const filters = [
  (item : firstItem)=>item,
  (item : firstItem)=>!item.isCompleted,
  (item : firstItem)=>item.isCompleted,
]

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FormsModule,
    AddListComponent
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

  listFilter : any = '0';
 
  addnewItem(){
    this.items.push(new firstItem(this.NewItemText));
    // this.NewItemText='';
  }

  get visibleItems() : firstItem[] {
    let e = this.listFilter;
    return this.items.filter(filters[e]);
  };

}
