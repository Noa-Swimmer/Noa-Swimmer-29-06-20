import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsListComponent } from './items/bought-items-page/items-list/items-list.component';
import { ReceivedItemsListComponent } from './items/recieved-items-page/received-items-list/received-items-list.component';
import { StoresComponent } from './items/stores-page/stores.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'items',
    pathMatch: 'full'
  },
  {
    path: 'items',
    component: ItemsListComponent
  },
  {
    path:'recievedItems',
    component:ReceivedItemsListComponent
  },
  {
    path:'stores',
    component:StoresComponent
  },
  {
    path: '**',
    redirectTo: 'items',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
