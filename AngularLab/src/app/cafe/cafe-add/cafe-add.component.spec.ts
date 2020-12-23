import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeAddComponent } from './cafe-add.component';

describe('CafeAddComponent', () => {
  let component: CafeAddComponent;
  let fixture: ComponentFixture<CafeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafeAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
