import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashCateComponent } from './trash-cate.component';

describe('TrashCateComponent', () => {
  let component: TrashCateComponent;
  let fixture: ComponentFixture<TrashCateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrashCateComponent]
    });
    fixture = TestBed.createComponent(TrashCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
