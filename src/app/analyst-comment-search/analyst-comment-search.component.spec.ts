import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalystCommentSearchComponent } from './analyst-comment-search.component';

describe('AnalystCommentSearchComponent', () => {
  let component: AnalystCommentSearchComponent;
  let fixture: ComponentFixture<AnalystCommentSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalystCommentSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalystCommentSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
