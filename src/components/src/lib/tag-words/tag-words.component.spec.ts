import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TagWordsComponent } from './tag-words.component';

describe('TagWordsComponent', () => {
  let component: TagWordsComponent;
  let fixture: ComponentFixture<TagWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagWordsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TagWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
