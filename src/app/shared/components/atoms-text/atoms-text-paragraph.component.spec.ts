

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomsTextParagraphComponent } from './atoms-text-paragraph.component';


export interface IAtomsTextParagraphComponent {
  component: AtomsTextParagraphComponent;
  fixture: ComponentFixture<AtomsTextParagraphComponent>;
}

describe('AtomsTextParagraphComponent', function (this: IAtomsTextParagraphComponent) {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtomsTextParagraphComponent],
    }).compileComponents();

    this.fixture = TestBed.createComponent(AtomsTextParagraphComponent);
    this.component = this.fixture.componentInstance;
    this.fixture.detectChanges();
  });

  it('should be created', () => {
    expect(this.component).not.toBeUndefined();
  });
  it('should have default textClass', () => {
    expect(this.component.textClass).toBe('');
  });
  it('should have default text', () => {
    expect(this.component.text).toBe('Default Text Paragraph');
  });
});
