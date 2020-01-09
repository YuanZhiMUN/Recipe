import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Receipt } from '../receipt.model';
@Component({
  selector: 'app-receipt-list',
  templateUrl: './receipt-list.component.html',
  styleUrls: ['./receipt-list.component.css']
})
export class ReceiptListComponent implements OnInit {
  @Output() receiptWasSelected = new EventEmitter<Receipt>();
  receipts: Receipt[] = [
    new Receipt('A Test Receipt One', 'This is simply a Test', 'https://www.thecookierookie.com/wp-content/uploads/2019/08/pasta-pomodoro-recipe-3-of-7.jpg.webp'),
    new Receipt('A Test Receipt Two', 'This is simply a Test', 'https://www.thecookierookie.com/wp-content/uploads/2019/08/pasta-pomodoro-recipe-3-of-7.jpg.webp'),
    new Receipt('A Test Receipt Three', 'This is simply a Test', 'https://www.thecookierookie.com/wp-content/uploads/2019/08/pasta-pomodoro-recipe-3-of-7.jpg.webp')
  ];
  constructor() { }

  ngOnInit() {
  }

  getSelectedRecipe(recipe: Receipt){
    this.receiptWasSelected.emit(recipe);
  }
}
