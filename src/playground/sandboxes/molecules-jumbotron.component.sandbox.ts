import { sandboxOf } from 'angular-playground';
import { MoleculesJumbotronComponent } from 'src/app/shared/components/molecules-jumbotron/molecules-jumbotron.component';

export default sandboxOf(MoleculesJumbotronComponent, {
  declareComponent: false,
}).add('Molecules Jumbotron Component', {
  template: `
   <molecules-jumbotron></molecules-jumbotron>
  `,
});
