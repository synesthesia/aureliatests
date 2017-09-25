import {Aurelia, PLATFORM} from 'aurelia-framework'
import environment from './environment';
import { ConfigBuilder } from 'aurelia-materialize-bridge';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }
  aurelia.use.plugin('aurelia-materialize-bridge', b => b.useAll());
  aurelia.start().then(() => aurelia.setRoot());
}
