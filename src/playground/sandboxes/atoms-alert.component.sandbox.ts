import { sandboxOf } from 'angular-playground';
import { AtomsAlertComponent } from './../../app/shared/components/atoms-alert/atoms-alert.component';

export default sandboxOf(AtomsAlertComponent, {
  declareComponent: false,
}).add('Atoms Alert Component', {
  template: `
   <atoms-alert alertText="Example Text" alertClass="success"></atoms-alert>
  `,
});
