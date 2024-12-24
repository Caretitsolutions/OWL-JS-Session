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

      }

      addItemList(event) {
        this.state.value ++;
        this.state.lists.push({
            id: Date.now(), // Unique ID for each block
            value: this.state.value
        });
    }

}

UserListComponent.components = { UserInputComponent };
export default UserListComponent;