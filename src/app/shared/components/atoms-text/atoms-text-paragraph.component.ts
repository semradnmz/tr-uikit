import { Input, Component } from '@angular/core';

@Component({
  selector: 'atoms-text-paragraph',
  template: `
    <p class="{{ textClass }}">
      <ng-content></ng-content>
    </p>
  `,
})
export class AtomsTextParagraphComponent {
  @Input()
  textClass: string = '';
}
