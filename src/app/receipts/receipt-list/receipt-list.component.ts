import { Component, OnInit } from '@angular/core';
import { Receipt } from '../receipt.model';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from '../receipt.service';
@Component({
  selector: 'app-receipt-list',
  templateUrl: './receipt-list.component.html',
  styleUrls: ['./receipt-list.component.css']
})
export class ReceiptListComponent implements OnInit {
  [x: string]: any;
 
  receipts: Receipt[];
  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.receipts = this.recipeService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
