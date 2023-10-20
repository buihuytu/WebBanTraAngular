import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashNewComponent } from './trash-new.component';

describe('TrashNewComponent', () => {
  let component: TrashNewComponent;
  let fixture: ComponentFixture<TrashNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrashNewComponent]
    });
    fixture = TestBed.createComponent(TrashNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
