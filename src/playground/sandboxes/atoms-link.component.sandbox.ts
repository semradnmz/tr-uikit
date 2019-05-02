import { sandboxOf } from 'angular-playground';
import { AtomsLinkComponent } from '../../app/shared/components/atoms-link/atoms-link.component';

export default sandboxOf(AtomsLinkComponent, {
  declareComponent: false,
}).add('Atoms Link Component', {
  template: `
  <atoms-link hrefSrc="#" hrefClass="link" hrefText="Example Link"></atoms-link>
  `,
});
