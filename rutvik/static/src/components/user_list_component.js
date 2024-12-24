/** @odoo-module */

const { Component, useState, xml, useEffect } = owl;
import UserInputComponent from './user_input_component';

class UserListComponent extends Component {
      static template = xml`
        <button class="btn btn-primary mb-3" t-on-click="addItemList">
            Add List
        </button>
        <div t-foreach="state.lists" t-as="list" t-key="list.id">
            <UserInputComponent t-props="{number:list.value}"/>
            <hr />
        </div>
      `;

      setup() {
          this.state = useState({
              lists: [],
              value : 0
          });

          // useEffect(() => {
          //     // Code to run when the component mounts or state.value changes
          //       console.log("Component mounted or state.value changed: ", this.state.value);

          //       if (this.state.items && this.state.items.length % 2 === 0) {
          //         this.state.buttonColor = "blue";
          //       } else {
          //         this.state.buttonColor = "green";
          //       }

          //       // Return a cleanup function to run when the component is unmounted or state.value changes again
          //       return () => {
          //         console.log("Cleanup when component is unmounted or state.value is updated.", this.state.buttonColor);
          //       };
          //     }, ()=>[this.state.inputValue]); // Dependency array: effect runs when state.value changes
      }

      addItemList(event) {
        this.state.value ++;
        this.state.lists.push({
            id: Date.now(), // Unique ID for each block
            value: this.state.value
        });
    }

    deleteItem(event) {
      console.log('event>>>>>>>>>>>>>>>>',event, this)
      event.target.style = {'text-decoration': 'line-through'}
    }
}

UserListComponent.components = { UserInputComponent };
export default UserListComponent;