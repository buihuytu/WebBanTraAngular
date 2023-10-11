import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyContactComponent } from './reply-contact.component';

describe('ReplyContactComponent', () => {
  let component: ReplyContactComponent;
  let fixture: ComponentFixture<ReplyContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReplyContactComponent]
    });
    fixture = TestBed.createComponent(ReplyContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
