/** @odoo-module **/

import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";

const { Component, useState, onWillStart, xml } = owl;

class CustomButton extends Component {
     setup() {
        super.setup();
        this.notification = useService("notification");
        this.orm = useService("orm");
        this.action = useService("action");
    }
   async _onClick(ev) {
        // show the notification
        this.notification.add("Hello", {
            type: "warning",
        });

        // get the all sales order
        var rec = await this.orm.searchRead(
                "sale.order",
                [],
                ["name"]
            );
        console.log("Sales Orders=======>",rec);

        // Open the sale order list view
        this.action.doAction("sale.action_quotations_with_onboarding");
    }
}

//This button will be show at top - right side
CustomButton.template = xml`<button class='btn btn-success' t-on-click='_onClick'>Click me</button>`;

export const systrayItem = {
    Component: CustomButton
};

registry.category("systray").add("systrayItemCustButton", systrayItem);