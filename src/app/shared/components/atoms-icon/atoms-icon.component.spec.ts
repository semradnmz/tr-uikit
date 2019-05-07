import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AtomsIconComponent } from './atoms-icon.component';

export interface IAtomsIconComponent {
  component: AtomsIconComponent;
  fixture: ComponentFixture<AtomsIconComponent>;
}

describe('AtomsIconComponent', function (this: IAtomsIconComponent) {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtomsIconComponent],
    }).compileComponents();

    this.fixture = TestBed.createComponent(AtomsIconComponent);
    this.component = this.fixture.componentInstance;
    this.fixture.detectChanges();
  });

  it('should be created', () => {
    expect(this.component).not.toBeUndefined();
  });

  it('should have default iconClass', () => {
    expect(this.component.iconClass).toBe('leaf');
  });

  it('should have fas fa-primary as class', () => {
    const el: HTMLElement = this.fixture.debugElement.query(By.css('i')).nativeElement;
    expect(el.className).toBe('fas fa-leaf');
  });
});
