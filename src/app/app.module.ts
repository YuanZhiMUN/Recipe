import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../header/header.component';
import { ReceiptsComponent } from './receipts/receipts.component';
import { ReceiptListComponent } from './receipts/receipt-list/receipt-list.component';
import { ReceiptDetailsComponent } from './receipts/receipt-details/receipt-details.component';
import { ReceiptItemComponent } from './receipts/receipt-list/receipt-item/receipt-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceiptsComponent,
    ReceiptListComponent,
    ReceiptDetailsComponent,
    ReceiptItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
