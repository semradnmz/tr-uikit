import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AtomsProgressComponent } from './atoms-progress.component';

export interface IAtomsImgComponent {
  component: AtomsProgressComponent;
  fixture: ComponentFixture<AtomsProgressComponent>;
}

describe('AtomsProgressComponent', function(this: IAtomsImgComponent) {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtomsProgressComponent],
    }).compileComponents();

    this.fixture = TestBed.createComponent(AtomsProgressComponent);
    this.component = this.fixture.componentInstance;
    this.fixture.detectChanges();
  });

  it('should be created', () => {
    expect(this.component).not.toBeUndefined();
  });

  it('should have default progressClass', () => {
    expect(this.component.progressClass).toBe('bg-success');
  });

  it('should have default progressValue', () => {
    expect(this.component.progressValue).toBe(10);
  });
});
