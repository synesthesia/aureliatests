import {Aurelia, PLATFORM} from 'aurelia-framework'
import environment from './environment';
import { ConfigBuilder } from 'aurelia-materialize-bridge';
/*
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

  aurelia.start().then(() => aurelia.setRoot());
}
*/
export async function configure(aurelia: Aurelia) {
  
      return aurelia.loader.loadModule(PLATFORM.moduleName('materialize-css')).then(() => {
          aurelia.use.standardConfiguration();
          //LogManager.addAppender(new ConsoleAppender());
  
          if (environment.debug) {
            aurelia.use.developmentLogging();
              //LogManager.setLevel(LogManager.logLevel.debug);
          }
          
          aurelia.use.plugin(PLATFORM.moduleName('aurelia-materialize-bridge'), (b: ConfigBuilder) => b.useAll());
          //log.info('Aurelia home component loading');
          return aurelia.start().then(() => aurelia.setRoot());
          
      });
         
  }
