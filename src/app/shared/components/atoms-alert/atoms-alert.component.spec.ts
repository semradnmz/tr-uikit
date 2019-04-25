import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AtomsAlertComponent } from './atoms-alert.component';

export interface UValidationErrorComponent {
  component: AtomsAlertComponent;
  fixture: ComponentFixture<AtomsAlertComponent>;
}

describe('AtomsAlertComponent', function(this: UValidationErrorComponent) {
  describe('as a unit', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [AtomsAlertComponent],
      }).compileComponents();

      this.fixture = TestBed.createComponent(AtomsAlertComponent);
      this.component = this.fixture.componentInstance;

      this.component.alertClass = 'primary';
      this.component.alertText = 'Test';
      this.fixture.detectChanges();
    });

    it('should be atoms-alert created', () => {
      expect(this.component).not.toBeUndefined();
    });

    it('should have alert alert-primary as class', () => {
      const el: HTMLElement = this.fixture.debugElement.query(By.css('div')).nativeElement;
      expect(el.className).toBe('alert alert-primary');
    });

    it('should have div elements alertText', () => {
      const textContent = (this.fixture.debugElement.query(By.css('div')).nativeElement as HTMLElement).textContent;
      expect(textContent.trim()).toEqual(this.component.alertText);
    });
  });
});
