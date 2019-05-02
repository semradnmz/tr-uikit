import { sandboxOf } from 'angular-playground';
import { AtomsTextParagraphComponent } from '../../app/shared/components/atoms-text/atoms-text-paragraph.component';

export default sandboxOf(AtomsTextParagraphComponent, {
  declareComponent: false,
}).add('Atoms Text Paragraph Component', {
  template: `
   <atoms-text-paragraph textClass="text-muted">Lorem ipsum dolor</atoms-text-paragraph>
  `,
});
