import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomsToastComponent } from './atoms-toast.component';
import { AtomsIconComponent } from '../atoms-icon/atoms-icon.component';

export interface IAtomsToastComponent {
  component: AtomsToastComponent;
  fixture: ComponentFixture<AtomsToastComponent>;
}

describe('AtomsToastComponent', function (this: IAtomsToastComponent) {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtomsToastComponent, AtomsIconComponent],
    }).compileComponents();

    this.fixture = TestBed.createComponent(AtomsToastComponent);
    this.component = this.fixture.componentInstance;
    this.fixture.detectChanges();
  });

  it('should be created', () => {
    expect(this.component).not.toBeUndefined();
  });

  it('should have default toastBodyClass', () => {
    expect(this.component.toastBodyClass).toBe('');
  });

  it('should have default toastHeaderClass', () => {
    expect(this.component.toastHeaderClass).toBe('');
  });

  it('should have default toastHeaderTitle', () => {
    expect(this.component.toastHeaderTitle).toBe('Bootstrap');
  });

  it('should have default toastHeaderTitleClass', () => {
    expect(this.component.toastHeaderTitleClass).toBe('mr-auto ml-2');
  });
  it('should have default toastTime', () => {
    expect(this.component.toastTime).toBe('12 minute');
  });

  it('should have default toastClass', () => {
    expect(this.component.toastClass).toBe('toast');
  });

  it('should have default toastWrapperClass', () => {
    expect(this.component.toastWrapperClass).toBe('d-flex justify-content-end');
  });


  it('should have default buttonType', () => {
    expect(this.component.buttonType).toBe('button');
  });

  it('should have default buttonClass', () => {
    expect(this.component.buttonClass).toBe('ml-2 mb-1 close');
  });

  it('should have default toastClose', () => {
    expect(this.component.toastClose).toBe('&times;');
  });

});
