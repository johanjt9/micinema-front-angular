import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalascreateComponent } from './salascreate.component';

describe('SalascreateComponent', () => {
  let component: SalascreateComponent;
  let fixture: ComponentFixture<SalascreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalascreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalascreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
