import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'atoms-link',
  template: `
    <a href="{{ hrefSrc }}" class="{{ hrefClass }}">{{ hrefText }}</a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AtomsLinkComponent {
  @Input()
  hrefSrc: string = '#';

  @Input()
  hrefClass: string = 'link';

  @Input()
  hrefText: string = 'Example Link';
}
