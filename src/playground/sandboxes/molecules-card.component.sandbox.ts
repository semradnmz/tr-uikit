import { sandboxOf } from 'angular-playground';
import { MoleculesCardComponent } from '../../app/shared/components/molecules-card/molecules-card.component';

export default sandboxOf(MoleculesCardComponent, {
  declareComponent: false,
}).add('Molecules Card Component', {
  template: `
    <div class="col-md-2">
      <molecules-card [imgSrc]="'https://via.placeholder.com/200'"></molecules-card>
    </div>
  `,
});
