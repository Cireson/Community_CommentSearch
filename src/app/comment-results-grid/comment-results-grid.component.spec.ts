import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentResultsGridComponent } from './comment-results-grid.component';

describe('CommentResultsGridComponent', () => {
  let component: CommentResultsGridComponent;
  let fixture: ComponentFixture<CommentResultsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentResultsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentResultsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
