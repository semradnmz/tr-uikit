import { ComponentFixture, TestBed } from '@angular/core/testing';
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

  it('should have default imgSrc', () => {
    expect(this.component.hrefSrc).toBe('#');
  });

  it('should have default imgClass', () => {
    expect(this.component.hrefClass).toBe('link');
  });

  it('should have default imgAlt', () => {
    expect(this.component.hrefText).toBe('Example Link');
  });
});
