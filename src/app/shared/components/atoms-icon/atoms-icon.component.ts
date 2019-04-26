import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'atoms-icon',
  template: `
    <i class="fas fa-{{ iconClass }}"></i>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AtomsIconComponent {
  @Input()
  iconClass: string = 'leaf';
}
