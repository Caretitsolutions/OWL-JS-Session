/** @odoo-module */

class CounterComponent extends Component {
  static template = xml`
    <button t-on-click="increment">
        Click Me! [<t t-esc="state.value"/>]
    </button>`;

      state = {
        value: 0
      };

      increment() {
        this.state.value++;  // Manually update state
        console.log(" this.state=========", this.state)
        this.render();  // Manually trigger a re-render of the component
      }
}
