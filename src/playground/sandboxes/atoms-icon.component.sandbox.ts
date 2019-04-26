import { sandboxOf } from 'angular-playground';
import { AtomsIconComponent } from 'src/app/shared/components/atoms-icon/atoms-icon.component';

export default sandboxOf(AtomsIconComponent, {
  declareComponent: false,
}).add('Atoms Icon Component', {
  template: `
<atoms-icon iconClass="check"></atoms-icon>
  `,
});
