import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AtomsButtonComponent } from './atoms-button.component';

export interface IAtomsButtonComponent {
  component: AtomsButtonComponent;
  fixture: ComponentFixture<AtomsButtonComponent>;
}

describe('AtomsButtonComponent', function(this: IAtomsButtonComponent) {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtomsButtonComponent],
    }).compileComponents();

    this.fixture = TestBed.createComponent(AtomsButtonComponent);
    this.component = this.fixture.componentInstance;
    this.fixture.detectChanges();
  });

  it('should be created', () => {
    expect(this.component).not.toBeUndefined();
  });

  it('should have default buttonType', () => {
    expect(this.component.buttonType).toBe('button');
  });

  it('should have default buttonText', () => {
    expect(this.component.buttonText).toBe('Button example text');
  });

  it('should have default buttonClass', () => {
    expect(this.component.buttonClass).toBe('primary');
  });

  it('should have btn btn-primary as class', () => {
    const buttonClass: HTMLElement = this.fixture.debugElement.query(By.css('button')).nativeElement;
    expect(buttonClass.className).toBe('btn btn-primary');
  });

  it('should have button elements buttonText', () => {
    const { textContent } = this.fixture.debugElement.query(By.css('button')).nativeElement as HTMLElement;
    expect(textContent.trim()).toEqual(this.component.buttonText);
  });
});
