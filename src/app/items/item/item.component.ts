import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Item } from '../state/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() { }
  @Input() item: Item;
  @Output() received = new EventEmitter<Item>();



  ngOnInit() {
  }
}
