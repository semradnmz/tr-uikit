import { Input, Component } from '@angular/core';

@Component({
  selector: 'atoms-text-paragraph-small',
  template: `
    <p>
      {{ text }}
    </p>
  `,
})
export class AtomsTextParagraphSmallComponent {
  @Input()
  text: string =
    'More recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
}
