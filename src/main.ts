import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FirebaseOptionsToken } from '@angular/fire';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

function loadConfig() {
  return environment.production
    ? fetch('/__/firebase/init.json').then(response => response.json())
    : Promise.resolve(environment.firebase);
}

(async () => {
  const config = await loadConfig();

  platformBrowserDynamic([{ provide: FirebaseOptionsToken, useValue: config }])
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
})();
