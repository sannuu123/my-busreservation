import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpitransactionComponent } from './upitransaction.component';

describe('UpitransactionComponent', () => {
  let component: UpitransactionComponent;
  let fixture: ComponentFixture<UpitransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpitransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpitransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
