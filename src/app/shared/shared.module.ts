import { ModuleWithProviders, NgModule } from '@angular/core';
import * as _components from './components';

const ATOMS = [
  _components.AtomsAlertComponent,
  _components.AtomsButtonComponent,
  _components.AtomsHeadingComponent,
  _components.AtomsIconComponent,
  _components.AtomsImgComponent,
  _components.AtomsProgressComponent,
  _components.AtomsTextParagraphComponent,
];

const MOLECULES = [_components.MoleculesCardComponent];

const ORGANISMS = [];

@NgModule({
  imports: [],
  declarations: [...ATOMS, ...MOLECULES, ...ORGANISMS],
  exports: [...ATOMS, ...MOLECULES, ...ORGANISMS],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
    };
  }
}
