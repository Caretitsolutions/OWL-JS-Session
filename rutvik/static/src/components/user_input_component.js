/** @odoo-module */

const { Component, useState, xml, useEffect } = owl;

class UserInputComponent extends Component {
      static template = xml`
        <div class="container mt-4">
    <h2>Block <t t-esc="props.number"/></h2>
    <div class="col-sm-4 col-md-4 col-4 mb-3">
        <input
            type="text"
            t-model="state.inputValue"
            class="form-control"
            placeholder="Enter your text"
            t-on-keypress="addItem"
        />
    </div>
    <ul>
        <t t-foreach="state.items" t-as="item" t-key="item.text">
            <li><span t-esc="item.text" t-attf-style="color: {{item.color}}" /></li>
        </t>
    </ul>
</div>`;

      setup() {
          this.state = useState({
              inputValue: "",
              buttonColor: "blue",
              items: [],
          });

          useEffect(() => {
              // Code to run when the component mounts or state.value changes
                console.log("Component mounted or state.value changed: ", this.state.value);

                if (this.state.items && this.state.items.length % 2 === 0) {
                  this.state.buttonColor = "blue";
                } else {
                  this.state.buttonColor = "green";
                }

                // Return a cleanup function to run when the component is unmounted or state.value changes again
                return () => {
                  console.log("Cleanup when component is unmounted or state.value is updated.", this.state.buttonColor);
                };
              }, ()=>[this.state.inputValue]); // Dependency array: effect runs when state.value changes
      }

      addItem(event) {
        if (event.key === "Enter" && this.state.inputValue.trim()) {
            this.state.items.push({'text':this.state.inputValue.trim(),
              'color':this.state.buttonColor});
            console.log("this.state.items>>>>>>>>>>>>>>>>.",this.state)
            this.state.inputValue = ""; // Clear input field
            this.state.buttonColor = ""; // Clear input field
        }
    }

    deleteItem(event) {
      console.log('event>>>>>>>>>>>>>>>>',event, this)
      event.target.style = {'text-decoration': 'line-through'}
    }
}
export default UserInputComponent;