import { ID } from '@datorama/akita';

export class Item {
    id: ID;
    itemName: string;
    store: string;
    priceIls: number;
    priceUsd:number;
    deliveryDate: Date;
    received: boolean;
  };