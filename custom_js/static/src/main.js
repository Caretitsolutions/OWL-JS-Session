/** @odoo-module */

// static/src/js/main.js
import { Component } from "@odoo/owl";
import CounterComponent from './components/counter_component';

//owl.Component.mount(CounterComponent, document.body);  // Mounting the component to the body
//import { rpc } from "@web/core/network/rpc";
import { App, EventBus } from "@odoo/owl";
//import { getTemplate } from "@web/core/templates";
//import { ExpenseTracker } from "./expense_tracker";

owl.whenReady(async() => {

    const app = new App(CounterComponent, {
//    env,
//    getTemplate,
    warnIfNoStaticProps : true,
    name: CounterComponent.constructor.name,
    });

    const root = await app.mount(document.body);
});