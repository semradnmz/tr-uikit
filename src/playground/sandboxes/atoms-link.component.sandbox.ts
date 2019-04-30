import { sandboxOf } from 'angular-playground';
import { AtomsLinkComponent } from './../../app/shared/components/atoms-link/atoms-link.component';

export default sandboxOf(AtomsLinkComponent, {
  declareComponent: false,
}).add('Atoms Link Component', {
  template: `
   <atoms-link linkHref="https://www.google.com/" linkClass="text-left" linkTitle="Google" linkTarget="_blank" linkText="link"></atoms-link>
  `,
});
