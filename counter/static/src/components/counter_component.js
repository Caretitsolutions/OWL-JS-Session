/** @odoo-module */

class CounterComponent extends Component {
      static template = xml`
        <button t-on-click="increment">
            Click Me! [<t t-esc="state.value"/>]
        </button>`;

      state = useState({ value: 0 });

      increment() {
        this.state.value++; 
      }
}
