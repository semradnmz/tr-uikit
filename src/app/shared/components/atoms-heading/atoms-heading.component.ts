import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';
@Component({
  selector: 'atoms-heading',
  template: `
    <h1 class="{{headingClass}}">{{headingText}}</h1>
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
