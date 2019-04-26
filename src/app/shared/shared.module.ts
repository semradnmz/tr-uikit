import { ModuleWithProviders, NgModule } from '@angular/core';
import * as _components from './components';

const ATOMS = [
  _components.AtomsTextParagraphSmallComponent,
  _components.AtomsAlertComponent,
  _components.AtomsButtonComponent,
  _components.AtomsImgComponent,
];

const MOLECULES = [];

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
