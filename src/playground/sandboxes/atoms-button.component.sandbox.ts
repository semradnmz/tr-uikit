import { sandboxOf } from 'angular-playground';
import { AtomsButtonComponent } from '../../app/shared/components/atoms-button/atoms-button.component';

export default sandboxOf(AtomsButtonComponent, {
  declareComponent: false,
}).add('Atoms Button Component', {
  template: `
   <atoms-button buttonClass="success" buttonText="Example Text"></atoms-button>
  `,
});
