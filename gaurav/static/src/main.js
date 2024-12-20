/** @odoo-module **/

import { registry } from "@web/core/registry"; // Import the registry to register components or services
import { useService } from "@web/core/utils/hooks"; // Import hook to access Odoo services

const { Component, useSubEnv, useChildSubEnv, useExternalListener, xml } = owl; // Import required OWL utilities

// Define the ChildComponent
class ChildComponent extends Component {
    static template = xml`<button class="btn btn-primary">Click me-2</button>`; // Child button template

    setup() {
        this.notification = useService("notification"); // Access the notification service
        // Access child-specific environment
        const env = this.env;
        console.log("Child environment:", env.childKey);

        // Add an external listener to the window object for 'click' events
        useExternalListener(window, "click", this.btnTwo.bind(this));
    }

    // Function to handle the 'click' event
    btnTwo() {
        // Display a warning notification when the window is clicked
        this.notification.add("Clicked btn - 2", { type: "warning" });
    }
}

// Define the CustomButton component
class CustomButton extends Component {
    setup() {
        // Access various Odoo services
        this.notification = useService("notification"); // Notification service for messages
        this.orm = useService("orm"); // ORM service for data operations
        this.action = useService("action"); // Action service to trigger Odoo actions

        // Set up a sub-environment to be shared with child components
        useSubEnv({
            parentKey: "ParentValue", // Parent-specific key-value pair
        });

        // Define a child-specific environment
        useChildSubEnv({
            childKey: "ChildValue", // Child-specific key-value pair
        });
    }

    // Function to handle the 'click' event of the custom button
    async _onClick(ev) {
        // Show a warning notification
        this.notification.add("Hello", { type: "warning" });

        // Fetch all sales orders using ORM service
        const rec = await this.orm.searchRead("sale.order", [], ["name"]);
        console.log("Sales Orders=======>", rec);

        // Trigger an action to open the sale order list view
        this.action.doAction("sale.action_quotations_with_onboarding");
    }
}

// Declare the child component in the parent's static components
CustomButton.components = { ChildComponent }; // Declare ChildComponent explicitly

// Template for CustomButton, including the child component
CustomButton.template = xml`
  <button class='btn btn-success' t-on-click='_onClick'>Click me</button>
  <br />
  <ChildComponent /> <!-- Render the child component -->
`;

// Register the custom button in the systray category
export const systrayItem = {
  Component: CustomButton, // Link the CustomButton component
};

registry.category("systray").add("systrayItemCustButton", systrayItem); // Add the custom button to the systray registry
