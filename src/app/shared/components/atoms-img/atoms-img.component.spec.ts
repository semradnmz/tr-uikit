import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AtomsImgComponent } from './atoms-img.component';

export interface IAtomsImgComponent {
  component: AtomsImgComponent;
  fixture: ComponentFixture<AtomsImgComponent>;
}

describe('AtomsImgComponent', function(this: IAtomsImgComponent) {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtomsImgComponent],
    }).compileComponents();

    this.fixture = TestBed.createComponent(AtomsImgComponent);
    this.component = this.fixture.componentInstance;
    this.fixture.detectChanges();
  });

  it('should be created', () => {
    expect(this.component).not.toBeUndefined();
  });

  it('should have default imgSrc', () => {
    expect(this.component.imgSrc).toBe('https://via.placeholder.com/200');
  });

  it('should have default imgClass', () => {
    expect(this.component.imgClass).toBe('img-fluid');
  });

  it('should have default imgAlt', () => {
    expect(this.component.imgAlt).toBe('Image alt');
  });
});
