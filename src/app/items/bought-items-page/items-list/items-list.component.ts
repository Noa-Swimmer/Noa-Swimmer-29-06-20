import { ItemsQuery } from './../../state/item.query';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { Item } from '../../state/item.model';
import { CurrencyService } from '../../services/currency.service';
import { ItemService } from '../../state/item.service';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
  providers: [CurrencyService]
})
export class ItemsListComponent implements OnInit {

  items$: Observable<Item[]>;

  subscription: Subscription;
  conversionRate: number;

  constructor(private itemsQuery: ItemsQuery,
    private itemsService: ItemService,
    private service: CurrencyService) {

  }

  ngOnInit() {
    this.items$ = this.itemsQuery.selectAll().pipe(
      map(itmes => itmes.filter(item=> {return !item.received;})),
      map(res => res.sort((item1, item2) => 
      { return (item1.deliveryDate > item2.deliveryDate ? 1 : -1) }))    
      );
    const source = interval(10000);
    this.subscription = source.subscribe(val => this.getRate());
  }

  getRate(): void {
    this.service.getConversion().subscribe(
      data => { this.conversionRate = data.rates.USD;  
        this.items$.pipe(
          map(items => (items.forEach(i => {
            let cloneItem = Object.assign({}, i);
            cloneItem.priceUsd = cloneItem.priceIls * this.conversionRate;
            console.log(cloneItem.priceUsd);
          })))); }
     
    );
   
  }

  receivedClick(item: Item) {
    let cloneItem = Object.assign({}, item);
    cloneItem.received = !cloneItem.received;
    this.itemsService.updateActive(cloneItem);
  }
}
