import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashUserComponent } from './trash-user.component';

describe('TrashUserComponent', () => {
  let component: TrashUserComponent;
  let fixture: ComponentFixture<TrashUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrashUserComponent]
    });
    fixture = TestBed.createComponent(TrashUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
