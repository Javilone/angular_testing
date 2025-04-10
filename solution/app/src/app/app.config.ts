import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch()), // withFetch() es un adaptador que permite utilizar la API Fetch de JavaScript para realizar peticiones HTTP en Angular. Es una forma de configurar el cliente HTTP de Angular para que utilice la API Fetch en lugar de XMLHttpRequest.
  ],
  // provideHttpClient() es un proveedor que permite realizar peticiones HTTP en Angular. Es una forma de configurar el cliente HTTP de Angular para que esté disponible en toda la aplicación.
};
