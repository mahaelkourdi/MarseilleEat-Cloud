import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRestauComponent } from './detail-restau.component';

describe('DetailRestauComponent', () => {
  let component: DetailRestauComponent;
  let fixture: ComponentFixture<DetailRestauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailRestauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRestauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
