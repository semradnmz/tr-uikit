import { Input, Component } from '@angular/core';

@Component({
  selector: 'atoms-text-paragraph',
  template: `
    <p class="{{ textClass }}">
      {{ text }}
    </p>
  `,
})
export class AtomsTextParagraphComponent {
  @Input()
  text: string = 'Default Text Paragraph';

  @Input()
  textClass: string = '';
}
