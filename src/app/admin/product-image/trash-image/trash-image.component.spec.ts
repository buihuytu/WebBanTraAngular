import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashImageComponent } from './trash-image.component';

describe('TrashImageComponent', () => {
  let component: TrashImageComponent;
  let fixture: ComponentFixture<TrashImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrashImageComponent]
    });
    fixture = TestBed.createComponent(TrashImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
