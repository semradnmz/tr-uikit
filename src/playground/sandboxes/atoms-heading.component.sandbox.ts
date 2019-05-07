import { sandboxOf } from 'angular-playground';
import { AtomsHeadingComponent } from 'src/app/shared/components/atoms-heading/atoms-heading.component';

export default sandboxOf(AtomsHeadingComponent, {
  declareComponent: false,
}).add('Atoms Heading Component', {
  template: `
   <atoms-heading headingClass="h1" headingText="Heading H1"></atoms-heading>
   <atoms-heading headingClass="h2" headingText="Heading H2"></atoms-heading>
   <atoms-heading headingClass="h3" headingText="Heading H3"></atoms-heading>
   <atoms-heading headingClass="h4" headingText="Heading H4"></atoms-heading>
   <atoms-heading headingClass="h5" headingText="Heading H5"></atoms-heading>
   <atoms-heading headingClass="h6" headingText="Heading H6"></atoms-heading>
  `,
});
