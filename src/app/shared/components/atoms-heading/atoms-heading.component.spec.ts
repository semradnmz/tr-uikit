import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtomsHeadingComponent } from './atoms-heading.component';


export interface IAtomsHeadingComponent {
  component: AtomsHeadingComponent;
  fixture: ComponentFixture<AtomsHeadingComponent>;
}

describe('AtomsHeadingComponent', function (this: IAtomsHeadingComponent) {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtomsHeadingComponent],
    }).compileComponents();

    this.fixture = TestBed.createComponent(AtomsHeadingComponent);
    this.component = this.fixture.componentInstance;
    this.fixture.detectChanges();
  });

  it('should be created', () => {
    expect(this.component).not.toBeUndefined();
  });
  it('should have default headingClass', () => {
    expect(this.component.headingClass).toBe('h1');
  });
  it('should have default headingText', () => {
    expect(this.component.headingText).toBe('Heading H1');
  });
});
