declare global {
  interface Window { serverargs: ServerArgs; }
  interface ServerArgs {
      topnav: NavItem[]
  }
  interface NavItem{
      url: any,
      title: any,
      isActive: boolean
  }
}


import { Aurelia, PLATFORM } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';
import { Navbar } from './components/navbar/navbar';


export class App {
  router: Router;
  navbar: Navbar;
  message = 'Hello World!!';
  topnav: NavItem[];
  

  constructor(){
    this.topnav = window.serverargs.topnav;
    this.navbar = new Navbar();
  }

  
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
/*
  attached(){
    console.debug('app.attached()');
    this.navbar.router = this.router;
    this.navbar.topnav = this.topnav;
    //this.navbar.attached();
  }*/
    
}
