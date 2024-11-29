/** @odoo-module */

import { rpc } from "@web/core/network/rpc";
import { App, EventBus } from "@odoo/owl";
import { getTemplate } from "@web/core/templates";
import { ExpenseTracker } from "./expense_tracker";

owl.whenReady(async() => {

    const app = new App(ExpenseTracker, {
//    env,
    getTemplate,
    warnIfNoStaticProps : true,
    name: ExpenseTracker.constructor.name,
    });

    const root = await app.mount(document.body);
});