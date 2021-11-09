import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolComponent } from './evol.component';

describe('EvolComponent', () => {
  let component: EvolComponent;
  let fixture: ComponentFixture<EvolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
