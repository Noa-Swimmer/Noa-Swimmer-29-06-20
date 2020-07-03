import { ItemsQuery } from './../../state/item.query';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { Item } from '../../state/item.model';
import { CurrencyService } from '../../services/currency.service';
import { ItemService } from '../../state/item.service';
import { map, tap, switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
  providers: [CurrencyService]
})
export class ItemsListComponent implements OnInit,OnDestroy {
  
  items$: Observable<Item[]>;

  subscription: Subscription;
  conversionRate: number;

  constructor(private itemsQuery: ItemsQuery,
    private itemsService: ItemService,
    private currencyService: CurrencyService) {

      this.items$ = this.createItemsObservable();
      const source = interval(10000);
      this.subscription = source.subscribe(val => {this.getRate()});
  }
  private createItemsObservable(): Observable<Item[]>{
    return this.itemsQuery.selectAll()
     .pipe(
         map(itmes => itmes.filter(item=> {return !item.received;})),
         map(res => res.sort((item1, item2) => 
           { return (item1.deliveryDate > item2.deliveryDate ? 1 : -1) }))    
     );
   }

  ngOnInit() {}

  getRate() {
    this.items$ = this.currencyService.getConversion()
    .pipe(
      tap((data) => {this.conversionRate = data.rates.USD;}),
      switchMap(() => this.createItemsObservable())
    )    
  }

  receivedClick(item: Item) {
    let cloneItem = Object.assign({}, item);
    cloneItem.received = !cloneItem.received;
    this.itemsService.updateActive(cloneItem);
  }
  // updateUsdPrice(item: Item) {
  //   let cloneItem = Object.assign({}, item);
  //   cloneItem.priceUsd = cloneItem.priceIls * this.conversionRate;
  //   console.log(cloneItem.priceUsd);
  //   this.itemsService.updateActive(cloneItem);
  // }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
