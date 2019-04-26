import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AtomsAlertComponent } from './atoms-alert.component';

export interface IAtomsAlertComponent {
  component: AtomsAlertComponent;
  fixture: ComponentFixture<AtomsAlertComponent>;
}

describe('AtomsAlertComponent', function(this: IAtomsAlertComponent) {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtomsAlertComponent],
    }).compileComponents();

    this.fixture = TestBed.createComponent(AtomsAlertComponent);
    this.component = this.fixture.componentInstance;
    this.fixture.detectChanges();
  });

  it('should be created', () => {
    expect(this.component).not.toBeUndefined();
  });

  it('should have default alertText', () => {
    expect(this.component.alertText).toBe('Alert example text');
  });

  it('should have default alertClass', () => {
    expect(this.component.alertClass).toBe('primary');
  });

  it('should have alert alert-primary as class', () => {
    const el: HTMLElement = this.fixture.debugElement.query(By.css('div')).nativeElement;
    expect(el.className).toBe('alert alert-primary');
  });

  it('should have div elements alertText', () => {
    const { textContent } = this.fixture.debugElement.query(By.css('div')).nativeElement as HTMLElement;
    expect(textContent.trim()).toEqual(this.component.alertText);
  });
});
