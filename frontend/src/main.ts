import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from '@/app.module';
import { environment } from './environments/environment';

// Enable production mode if required
if (environment.production) {
  enableProdMode();
}

// Bootstrap the main application module
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error('Error bootstrapping the application:', err));
