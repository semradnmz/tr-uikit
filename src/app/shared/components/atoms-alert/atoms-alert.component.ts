import { Input, Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'atoms-alert',
  template: `
    <div class="alert alert-{{ alertClass }}" role="alert">
      {{ alertText }}
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AtomsAlertComponent {
  @Input()
  alertText: string = 'A simple primary alert—check it out!';

  @Input()
  alertClass = 'primary';
}
