import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsListComponent } from './bought-items-page/items-list/items-list.component';
import { ReceivedItemsListComponent } from './recieved-items-page/received-items-list/received-items-list.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StoresComponent } from './stores-page/stores.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    ItemsListComponent, 
    ItemComponent, 
    ReceivedItemsListComponent,
    StoresComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[
    ItemsListComponent,
    ItemComponent,
    ReceivedItemsListComponent
  ]
})
export class ItemsModule { }
