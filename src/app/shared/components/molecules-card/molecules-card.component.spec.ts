import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoleculesCardComponent } from './molecules-card.component';
import { AtomsImgComponent } from '../atoms-img/atoms-img.component';
import { AtomsHeadingComponent } from '../atoms-heading/atoms-heading.component';
import { AtomsTextParagraphComponent } from '../atoms-text/atoms-text-paragraph.component';

export interface IMoleculesCardComponent {
  component: MoleculesCardComponent;
  fixture: ComponentFixture<MoleculesCardComponent>;
}

describe('MoleculesCardComponent', function(this: IMoleculesCardComponent) {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoleculesCardComponent, AtomsImgComponent, AtomsHeadingComponent, AtomsTextParagraphComponent],
    }).compileComponents();

    this.fixture = TestBed.createComponent(MoleculesCardComponent);
    this.component = this.fixture.componentInstance;
    this.fixture.detectChanges();
  });

  it('should be created', () => {
    expect(this.component).not.toBeUndefined();
  });

  it('should have default imgSrc', () => {
    expect(this.component.imgSrc).toBe('https://via.placeholder.com/286x180');
  });

  it('should have default imgClass', () => {
    expect(this.component.imgClass).toBe('card-img-top');
  });

  it('should have default imgAlt', () => {
    expect(this.component.imgAlt).toBe('Card image');
  });

  it('should have default headingClass', () => {
    expect(this.component.headingClass).toBe('h5 card-title');
  });

  it('should have default headingText', () => {
    expect(this.component.headingText).toBe('Card title');
  });

  it('should have default textClass', () => {
    expect(this.component.textClass).toBe('card-text');
  });

  it('should have default text', () => {
    expect(this.component.text).toBe(
      'Some quick example text to build on the card title and make up the bulk of the cards content.',
    );
  });
});
