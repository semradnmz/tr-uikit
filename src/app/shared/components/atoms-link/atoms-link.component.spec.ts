import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AtomsLinkComponent } from './atoms-link.component';

export interface IAtomsLinkComponent {
  component: AtomsLinkComponent;
  fixture: ComponentFixture<AtomsLinkComponent>;
}

describe('AtomsLinkComponent', function(this: IAtomsLinkComponent) {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtomsLinkComponent],
    }).compileComponents();

    this.fixture = TestBed.createComponent(AtomsLinkComponent);
    this.component = this.fixture.componentInstance;
    this.fixture.detectChanges();
  });

  it('should be created', () => {
    expect(this.component).not.toBeUndefined();
  });

  it('should have default linkHref', () => {
    expect(this.component.linkHref).toBe('https://www.google.com/');
  });

  it('should have default linkClass', () => {
    expect(this.component.linkClass).toBe('text-center');
  });

  it('should have default linkTitle', () => {
    expect(this.component.linkTitle).toBe('Google');
  });
  it('should have default linkTarget', () => {
    expect(this.component.linkTarget).toBe('_blank');
  });
  it('should have default linkDownload', () => {
    expect(this.component.linkDownload).toBe('indir');
  });
  it('should have default linkText', () => {
    expect(this.component.linkText).toBe('Google');
  });
});
