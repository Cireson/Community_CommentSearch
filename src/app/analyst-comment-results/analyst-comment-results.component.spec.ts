import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalystCommentResultsComponent } from './analyst-comment-results.component';

describe('AnalystCommentResultsComponent', () => {
  let component: AnalystCommentResultsComponent;
  let fixture: ComponentFixture<AnalystCommentResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalystCommentResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalystCommentResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
