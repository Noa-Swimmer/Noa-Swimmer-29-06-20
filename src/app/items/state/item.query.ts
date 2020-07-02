import { Injectable } from '@angular/core';
import {  QueryEntity } from '@datorama/akita';
import { ItemsState, ItemsStore } from './item.store';
import { Item } from './item.model';

@Injectable({
    providedIn: 'root'
})
export class ItemsQuery extends QueryEntity<ItemsState, Item> {
    constructor(protected store: ItemsStore) {
        super(store);
    }
}