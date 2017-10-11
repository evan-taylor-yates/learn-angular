import { enableProdMode } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Import our module
import { AppModule } from './app/app.module';

// Imports our environment
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/*
This is how we bootstrap our module onto the project. From here, Angular
will look for the 'bootstrapped' root component in the module (in this case
the root is called 'App Component')
*/
platformBrowserDynamic().bootstrapModule(AppModule);
