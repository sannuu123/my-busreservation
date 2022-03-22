import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprofilesComponent } from './myprofiles.component';

describe('MyprofilesComponent', () => {
  let component: MyprofilesComponent;
  let fixture: ComponentFixture<MyprofilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyprofilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyprofilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
