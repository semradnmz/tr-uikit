import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from "@angular/core"

@Component({
  selector: 'atoms-text-paragraph',
  template: `
    <p class="{{ textClass }}">
      <ng-content></ng-content>
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AtomsTextParagraphComponent {
  @Input()
  textClass: string = '';
}
