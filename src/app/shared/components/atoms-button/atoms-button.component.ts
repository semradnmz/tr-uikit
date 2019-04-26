import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'atoms-button',
  template: `
    <button type="{{ buttonType }}" class="btn btn-{{ buttonClass }}">{{ buttonText }}</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AtomsButtonComponent {
  @Input()
  buttonType: string = 'button';

  @Input()
  buttonClass: string = 'primary';

  @Input()
  buttonText: string = 'Primary';
}
