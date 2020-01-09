import { Component, OnInit, Input } from '@angular/core';
import { Receipt } from '../receipt.model';

@Component({
  selector: 'app-receipt-details',
  templateUrl: './receipt-details.component.html',
  styleUrls: ['./receipt-details.component.css']
})
export class ReceiptDetailsComponent implements OnInit {
  @Input() recipe: Receipt;
  
  constructor() { }

  ngOnInit() {
  }

}
