/** @odoo-module */


import { Component, xml } from "@odoo/owl";
import { Header } from "./components/header/header";
//import { Container } from "./components/container/container";

export class ExpenseTracker extends Component {
//        static template = xml`<h1>Hello World</h1>`;
    static template = "expense_tracker.root";
    static components = { Header};
}
