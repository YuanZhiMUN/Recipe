import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptStartComponent } from './receipt-start.component';

describe('ReceiptStartComponent', () => {
  let component: ReceiptStartComponent;
  let fixture: ComponentFixture<ReceiptStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
