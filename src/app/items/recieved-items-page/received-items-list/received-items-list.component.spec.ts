import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedItemsListComponent } from './received-items-list.component';

describe('ReceivedItemsListComponent', () => {
  let component: ReceivedItemsListComponent;
  let fixture: ComponentFixture<ReceivedItemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedItemsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
