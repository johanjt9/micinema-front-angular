import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicinemaComponent } from './micinema.component';

describe('MicinemaComponent', () => {
  let component: MicinemaComponent;
  let fixture: ComponentFixture<MicinemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicinemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
