import { sandboxOf } from 'angular-playground';
import { AtomsImgComponent } from '../../app/shared/components/atoms-img/atoms-img.component';

export default sandboxOf(AtomsImgComponent, {
  declareComponent: false,
}).add('Atoms Image Component', {
  template: `
    <atoms-img imgSrc="https://via.placeholder.com/100" imgClass="img-thumbnail" imgAlt="Image alt text"></atoms-img>
  `,
});
