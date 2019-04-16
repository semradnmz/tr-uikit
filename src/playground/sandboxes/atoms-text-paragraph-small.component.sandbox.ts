import { sandboxOf } from 'angular-playground';
import { AtomsTextParagraphSmallComponent } from './../../app/shared/components/atoms-text/atoms-text-paragraph-small.component';

export default sandboxOf(AtomsTextParagraphSmallComponent, {
  declareComponent: false,
}).add('Atoms Text Paragraph Small Component', {
  template: `
   <atoms-text-paragraph-small></atoms-text-paragraph-small>
  `,
});
