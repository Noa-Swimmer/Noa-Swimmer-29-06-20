import { Injectable } from '@angular/core';
import { StoreConfig, EntityStore, Store, EntityState } from '@datorama/akita';
import { Item } from './item.model';

export interface ItemsState extends EntityState<Item> {}

@Injectable({
    providedIn: 'root'
})
@StoreConfig({ name: 'items' })
export class ItemsStore extends EntityStore<ItemsState, Item> {
    constructor() {
        super();
    }
}