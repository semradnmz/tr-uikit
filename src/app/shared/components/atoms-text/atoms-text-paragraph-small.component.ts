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
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
}
