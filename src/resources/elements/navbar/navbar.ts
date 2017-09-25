
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

import { bindable, bindingMode, InlineViewStrategy, customElement } from 'aurelia-framework';

import { Router, RouterConfiguration } from 'aurelia-router';

@customElement('navbartwo')
export class Navbar {
    

    @bindable topnav: NavItem[];
    @bindable router: Router;

    viewStrategy: InlineViewStrategy;

    template : string;

    constructor(){
        console.log('navbartwo constructor');
    }

    attached() {
        console.debug('navbartwo attached');
        this.render();
    }

   
    render() {
        this.template = this.generateTemplate(this.topnav);
        this.viewStrategy = new InlineViewStrategy(`<template>${this.template}</template>`);
    }

    generateTemplate(topnav: NavItem[]) : string    {
        let navstring = '<md-navbar><a href="/" class="brand-logo">Logo</a>';
        navstring = navstring + '<ul id="nav-mobile" class="right hide-on-med-and-down">'
        for (let item of topnav){
            let itemhtml = this.processMenuItem(item);
            navstring = navstring + itemhtml;
            
        }
        navstring = navstring + '</ul></md-navbar>';
        return navstring;
    }

    processMenuItem(item : NavItem): string {
        let lineHtml = '<li md-waves';
        if (item.isActive) lineHtml = lineHtml + 'class="active"';
        lineHtml = lineHtml + '><a ';
        if (item.isActive) lineHtml = lineHtml + 'md-dropdown="activates:dropdown1"';
        if (!item.isActive) lineHtml = lineHtml + ` href="${item.url}"` ;
        lineHtml = lineHtml + '>';
        lineHtml = lineHtml + item.title;
        if (item.isActive) lineHtml = lineHtml + '<i class="material-icons right">arrow_drop_down</i>';
        lineHtml = lineHtml + '</a></li>';
        return lineHtml;
    }
}