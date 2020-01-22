import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceiptsComponent } from './receipts/receipts.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ReceiptStartComponent } from './receipts/receipt-start/receipt-start.component';
import { ReceiptDetailsComponent } from './receipts/receipt-details/receipt-details.component';
import { RecipeEditComponent } from './receipts/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: 'recipes', component: ReceiptsComponent, children: [
      { path: '', component: ReceiptStartComponent},
      { path: 'new', component: RecipeEditComponent},
      { path: ':id', component: ReceiptDetailsComponent},
      { path: ':id/edit', component: RecipeEditComponent}
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
