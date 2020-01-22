import { Component, OnInit, Input } from '@angular/core';
import { Receipt } from '../../receipt.model';
import { RecipeService } from '../../receipt.service';

@Component({
  selector: 'app-receipt-item',
  templateUrl: './receipt-item.component.html',
  styleUrls: ['./receipt-item.component.css']
})
export class ReceiptItemComponent implements OnInit {
  @Input() recipe: Receipt;
  @Input() index: number;

  constructor(private receiptService: RecipeService) { }

  ngOnInit() {
  }

}
