import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

//This code initializes the platform that your application runs in, then uses the platform to bootstrap your AppModule.
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
