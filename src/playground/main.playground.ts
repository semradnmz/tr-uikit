import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PlaygroundModule } from 'angular-playground';
import { SharedModule } from '../app/shared/shared.module';

PlaygroundModule.configure({
  selector: 'app-root',
  overlay: false,
  modules: [SharedModule],
});

platformBrowserDynamic().bootstrapModule(PlaygroundModule);
