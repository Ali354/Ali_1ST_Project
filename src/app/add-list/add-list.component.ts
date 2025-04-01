import { Component ,Input } from '@angular/core';
import { firstItem } from '../../shared/models/firstItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-list.component.html',
  styleUrl: './add-list.component.css'
})
export class AddListComponent {
  @Input() items: firstItem[] = [];
  toggleItem(item : firstItem){
    item.isCompleted = !item.isCompleted;
    console.log(item)
  }
}
