/** @odoo-module **/

import { registry } from "@web/core/registry";
import { CharField, charField } from "@web/views/fields/char/char_field";
import { Component, useExternalListener, useRef, useEffect } from "@odoo/owl";


export class DynamicColorCharField extends CharField {
    // Determine color based on the $(ev.currentTarget)
    getInputColor(ev) {
        $(ev.currentTarget).css('color', $(ev.currentTarget).val());

    }


}

DynamicColorCharField.template = "gaurav.dynamicColorChange";

export const DynamicColorCharWid = {
    ...charField,
    component: DynamicColorCharField,
};

registry.category("fields").add("dynamic_color_char", DynamicColorCharWid);
