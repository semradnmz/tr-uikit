import { sandboxOf } from 'angular-playground';
import { AtomsProgressComponent } from '../../app/shared/components/atoms-progress/atoms-progress.component';

export default sandboxOf(AtomsProgressComponent, {
  declareComponent: false,
}).add('Atoms Progress Component', {
  template: `
    <atoms-progress progressClass="bg-warning" progressValue="60"></atoms-progress>
  `,
});
