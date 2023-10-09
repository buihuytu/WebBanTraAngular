import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashContactComponent } from './trash-contact.component';

describe('TrashContactComponent', () => {
  let component: TrashContactComponent;
  let fixture: ComponentFixture<TrashContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrashContactComponent]
    });
    fixture = TestBed.createComponent(TrashContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
