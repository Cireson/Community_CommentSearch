import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCommentResultsComponent } from './user-comment-results.component';

describe('UserCommentResultsComponent', () => {
  let component: UserCommentResultsComponent;
  let fixture: ComponentFixture<UserCommentResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCommentResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCommentResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
