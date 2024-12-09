/** @odoo-module */

import { Component } from "@odoo/owl";
import CounterComponent from './components/counter_component';
import { App, EventBus } from "@odoo/owl";

owl.whenReady(async() => {

    const app = new App(CounterComponent, {
    warnIfNoStaticProps : true,
    name: CounterComponent.constructor.name,
    });

    const root = await app.mount(document.body);
});