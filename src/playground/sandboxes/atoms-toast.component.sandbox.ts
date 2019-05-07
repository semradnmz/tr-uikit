import { sandboxOf } from 'angular-playground';

import { AtomsToastComponent } from 'src/app/shared/components/atoms-toast/atoms-toast.component';

export default sandboxOf(AtomsToastComponent, {
  declareComponent: false,
}).add('Atoms Toast Component', {
  template: `
  <atoms-toast></atoms-toast>
  `,
});
