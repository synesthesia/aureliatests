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

import {bindable, bindingMode, customElement} from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';

@customElement('navbar')
export class Navbar {

    serverargs : ServerArgs;
    @bindable topnav: any;
    @bindable router: Router;
   
    constructor(){
        //this.topnav = parent.window.serverargs.topnav;
        
           }

    attached(){
/*
        console.debug('navbar.attached()');
        console.debug(this.topnav);
        console.debug(this.router);
        */
    }



}