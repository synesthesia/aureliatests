import { Aurelia, PLATFORM } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';
import {topNav} from 'server-args';

export class App {
  router: Router;

  message = 'Hello World!!';

  configureRouter(config: RouterConfiguration, router: Router) {
    
    config.title = 'Test router';
    
    config.map([{
        route: ['', 'home'],
        name: 'home',
        settings: { icon: 'home' },
        moduleId: PLATFORM.moduleName('./components/home/home'),
        nav: true,
        title: 'Home'
    }, 
    
    {
        route: 'counter',
        name: 'counter',
        settings: { icon: 'education' },
        moduleId: PLATFORM.moduleName('./components/counter/counter'),
        nav: true,
        title: 'Counter'
    }
    
    ]);
    this.router = router;
  }
    
}
