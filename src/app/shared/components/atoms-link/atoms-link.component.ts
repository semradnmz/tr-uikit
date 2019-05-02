import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'atoms-link',
  template: `
    <a href="{{ hrefSrc }}" class="{{ hrefClass }}">
      <ng-content></ng-content>
    </a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AtomsLinkComponent {
  @Input()
  hrefSrc: string = '#';

  @Input()
  hrefClass: string = 'link';
}
