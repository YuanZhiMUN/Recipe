import { Component, OnInit } from '@angular/core';
import { RecipeService } from './receipt.service';

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.css'],
  providers: [RecipeService]
})
export class ReceiptsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
   
  }

}
