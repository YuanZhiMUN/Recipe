import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../header/header.component';
import { ReceiptsComponent } from './receipts/receipts.component';
import { ReceiptListComponent } from './receipts/receipt-list/receipt-list.component';
import { ReceiptDetailsComponent } from './receipts/receipt-details/receipt-details.component';
import { ReceiptItemComponent } from './receipts/receipt-list/receipt-item/receipt-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './share/dropdown.derective';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { ReceiptStartComponent } from './receipts/receipt-start/receipt-start.component';
import { RecipeEditComponent } from './receipts/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceiptsComponent,
    ReceiptListComponent,
    ReceiptDetailsComponent,
    ReceiptItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    ReceiptStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
