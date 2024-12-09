/** @odoo-module */

const { Component, useState, xml, useEffect } = owl;

class CounterComponent extends Component {
      static template = xml`
        <button t-on-click="increment" t-attf-style="background-color: {{state.buttonColor}}">
            Click Me! [<t t-esc="state.value"/>]
        </button>`;

      state = useState({
        value: 0,
        buttonColor: "blue"
      });

      // useEffect is used to run code after the component is mounted or updated
      setup() {
                useEffect(() => {
              // Code to run when the component mounts or state.value changes
              console.log("Component mounted or state.value changed: ", this.state.value);

              if (this.state.value % 2 === 0) {
                this.state.buttonColor = "blue";
              } else {
                this.state.buttonColor = "green";
              }

              // Return a cleanup function to run when the component is unmounted or state.value changes again
              return () => {
                console.log("Cleanup when component is unmounted or state.value is updated.", this.state.buttonColor);
              };
            }, ()=>[this.state.value]); // Dependency array: effect runs when state.value changes
      }

      increment() {
        this.state.value++;
        console.log("Updated state value:", this.state.value);
      }
}