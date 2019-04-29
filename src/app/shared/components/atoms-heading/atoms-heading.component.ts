import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';
@Component({
  selector: 'atoms-heading',
  template: `
    <div class="{{headingClass}}">{{headingText}}</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AtomsHeadingComponent {
  @Input()
  headingClass: string = 'h1';

  @Input()
  headingText: string = 'Heading H1';
}
