/** @odoo-module */

// static/src/js/components/counter_component.js
const { Component, useState, xml, useEffect } = owl;

//onst { Component, useState, xml, useEffect } = owl;

class CounterComponent extends Component {
  static template = xml`
    <button t-on-click="increment" t-attf-style="background-color: {{state.buttonColor}}">
        Click Me! [<t t-esc="state.value"/>]
    </button>`;

  state = useState({
    value: 0,
    buttonColor: "blue" // Add a new state for button color
  });

  // useEffect is used to run code after the component is mounted or updated
 setup() {
    useEffect(() => {
      // Code to run when the component mounts or state.value changes
      console.log("Component mounted or state.value changed: ", this.state.value);

      // Change button color whenever state.value changes
      if (this.state.value % 2 === 0) {
        this.state.buttonColor = "blue"; // Set blue color for even value
      } else {
        this.state.buttonColor = "green"; // Set green color for odd value
      }

      // Return a cleanup function to run when the component is unmounted or state.value changes again
      return () => {
        console.log("Cleanup when component is unmounted or state.value is updated.", this.state.buttonColor);
      };
    }, ()=>[this.state.value]); // Dependency array: effect runs when state.value changes
  }

  increment() {
    this.state.value++; // Increment the value and trigger re-render
    console.log("Updated state value:", this.state.value);
  }
}



export default CounterComponent;
