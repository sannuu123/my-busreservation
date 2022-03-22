import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanclebusComponent } from './canclebus.component';

describe('CanclebusComponent', () => {
  let component: CanclebusComponent;
  let fixture: ComponentFixture<CanclebusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanclebusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanclebusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
