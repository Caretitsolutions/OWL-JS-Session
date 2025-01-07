/** @odoo-module */


import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { Layout } from "@web/search/layout";


class Dashboard extends Component {
    static template = "dashboard.dashboard";
    static components = { Layout };
    setup() {
        this.display = {
            controlPanel: {},
        };
    }
}

registry.category("actions").add("dashboard.dashboard", Dashboard);