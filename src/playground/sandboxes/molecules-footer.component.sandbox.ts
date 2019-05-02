import { sandboxOf } from 'angular-playground';
import { MoleculesFooterComponent } from '../../app/shared/components/molecules-footer/molecules-footer.component';

export default sandboxOf(MoleculesFooterComponent, {
  declareComponent: false,
}).add('Molecules Footer Component', {
  template: `
    <molecules-footer [text]="'Lorem ipsum dolor'"></molecules-footer>
  `,
});
