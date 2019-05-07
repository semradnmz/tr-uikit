import { ComponentFixture, TestBed } from '@angular/core/testing';


import { MoleculesJumbotronComponent } from './molecules-jumbotron.component';
import { AtomsHeadingComponent } from '../atoms-heading/atoms-heading.component';
import { AtomsLinkComponent } from '../atoms-link/atoms-link.component';
import { AtomsTextParagraphComponent } from '../atoms-text/atoms-text-paragraph.component';

export interface IMoleculesJumbotronComponent {
  component: MoleculesJumbotronComponent;
  fixture: ComponentFixture<MoleculesJumbotronComponent>;
}

describe('MoleculesJumbotronComponent', function (this: IMoleculesJumbotronComponent) {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoleculesJumbotronComponent, AtomsHeadingComponent, AtomsLinkComponent, AtomsTextParagraphComponent],
    }).compileComponents();

    this.fixture = TestBed.createComponent(MoleculesJumbotronComponent);
    this.component = this.fixture.componentInstance;
    this.fixture.detectChanges();
  });

  it('should be created', () => {
    expect(this.component).not.toBeUndefined();
  });
  it('should have default classJumbotron', () => {
    expect(this.component.classJumbotron).toBe('text-center');
  });
  it('should have default classContainer', () => {
    expect(this.component.classContainer).toBe('container');
  });
  it('should have default headingClass', () => {
    expect(this.component.headingClass).toBe('h1 jumbotron-heading');
  });
  it('should have default textJumbotron', () => {
    expect(this.component.textJumbotron).toBe('Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.');
  });
  it('should have default textClass', () => {
    expect(this.component.textClass).toBe('lead text-muted');
  });
  it('should have default hrefClass', () => {
    expect(this.component.hrefClass).toBe('btn btn-primary mx-1 my-2');
  });
  it('should have default hrefClassSecond', () => {
    expect(this.component.hrefClassSecond).toBe('btn btn-secondary mx-1 my-2');
  });
  it('should have default linkText', () => {
    expect(this.component.linkText).toBe('linkText');
  });
  it('should have default linkTextSecond', () => {
    expect(this.component.linkTextSecond).toBe('linkText 2');
  });

});
