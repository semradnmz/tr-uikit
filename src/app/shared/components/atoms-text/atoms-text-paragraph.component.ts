import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from "@angular/core"

@Component({
  selector: 'atoms-text-paragraph',
  template: `
    <p class="{{ textClass }}">
      {{ text }}
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AtomsTextParagraphComponent {
  @Input()
  text: string = 'Default Text Paragraph';

  @Input()
  textClass: string = '';
}
