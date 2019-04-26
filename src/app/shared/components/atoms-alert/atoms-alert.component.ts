import { Input, Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'atoms-alert',
  template: `
    <div class="alert alert-{{ alertClass }}">
      {{ alertText }}
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AtomsAlertComponent {
  @Input()
  alertText: string = 'Alert example text';

  @Input()
  alertClass: string = 'primary';
}
