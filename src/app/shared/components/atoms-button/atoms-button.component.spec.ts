import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AtomsButtonComponent } from './atoms-button.component';

export interface UValidationErrorComponent {
  component: AtomsButtonComponent;
  fixture: ComponentFixture<AtomsButtonComponent>;
}

describe('AtomsButtonComponent', function(this: UValidationErrorComponent) {
  describe('as a unit', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [AtomsButtonComponent],
      }).compileComponents();

      this.fixture = TestBed.createComponent(AtomsButtonComponent);
      this.component = this.fixture.componentInstance;

      this.component.buttonClass = 'primary';
      this.component.buttonText = 'Test';
      this.fixture.detectChanges();
    });

    it('should be atoms-button created', () => {
      expect(this.component).not.toBeUndefined();
    });

    it('should have btn btn-primary as class', () => {
      const buttonClass: HTMLElement = this.fixture.debugElement.query(By.css('button')).nativeElement;
      expect(buttonClass.className).toBe('btn btn-primary');
    });

    it('should have button elements buttonText', () => {
      const textContent = (this.fixture.debugElement.query(By.css('button')).nativeElement as HTMLElement).textContent;
      expect(textContent.trim()).toEqual(this.component.buttonText);
    });
  });
});
