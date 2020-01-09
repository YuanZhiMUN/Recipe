import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Receipt } from '../../receipt.model';

@Component({
  selector: 'app-receipt-item',
  templateUrl: './receipt-item.component.html',
  styleUrls: ['./receipt-item.component.css']
})
export class ReceiptItemComponent implements OnInit {
  @Input() recipe: Receipt;
  @Output() recipeSelected = new EventEmitter<void>();
  selectRecipe(){
    this.recipeSelected.emit();
  }
  constructor() { }

  ngOnInit() {
  }

}
