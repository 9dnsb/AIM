import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import API from '@aws-amplify/api';
import PubSub from '@aws-amplify/PubSub';
import awsConfig from './aws-exports.js';
import Amplify from 'aws-amplify';

if (environment.production) {
  enableProdMode();
}

PubSub.configure(awsConfig);
API.configure(awsConfig);
Amplify.configure(awsConfig);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
