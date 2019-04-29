import { sandboxOf } from 'angular-playground';
import { AtomsHeadingComponent } from 'src/app/shared/components/atoms-heading/atoms-heading.component';

export default sandboxOf(AtomsHeadingComponent, {
  declareComponent: false,
}).add('Atoms Heading Component', {
  template: `
   <atoms-heading headingClass="h1" headingText="Heading H1"></atoms-heading>
  `,
});
