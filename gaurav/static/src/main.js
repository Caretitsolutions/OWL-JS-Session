/** @odoo-module **/

import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";

const { Component, useRef, useExternalListener, onMounted, xml } = owl;

class ChildComponent extends Component {
    static template = xml`<button class="btn btn-primary">Click me-2</button>`;
  setup() {
    this.notification = useService("notification");
    useExternalListener(window, "click", this.btnTwo.bind(this));
  }

  btnTwo() {
    this.notification.add("Clicked btn - 2", { type: "warning" });
  }
}

class CustomButton extends Component {
  setup() {
    this.notification = useService("notification");
    this.orm = useService("orm");
    this.action = useService("action");
  }

  async _onClick(ev) {
    // Show a notification
    this.notification.add("Hello", { type: "warning" });

    // Fetch all sales orders
    const rec = await this.orm.searchRead("sale.order", [], ["name"]);
    console.log("Sales Orders=======>", rec);

    // Open the sale order list view
    this.action.doAction("sale.action_quotations_with_onboarding");
  }
}

// Declare the child component in the parent's static components
CustomButton.components = { ChildComponent };

// Template for CustomButton
CustomButton.template = xml`
  <button class='btn btn-success' t-on-click='_onClick'>Click me</button>
  <br />
  <ChildComponent />
`;

// Register the custom button in the systray
export const systrayItem = {
  Component: CustomButton,
};

registry.category("systray").add("systrayItemCustButton", systrayItem);
