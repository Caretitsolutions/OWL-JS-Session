/** @odoo-module **/

import { registry } from "@web/core/registry";
import { FloatField, floatField } from '@web/views/fields/float/float_field';
import { Component, useExternalListener, useRef, useEffect } from "@odoo/owl";


export class FloatIntField extends FloatField {
    // Determine color based on the $(ev.currentTarget)
    get formattedValue() {
        return Number(this.value);
    }
}


export const FloatIntCharWid = {
    ...floatField,
    component: FloatIntField,
};

registry.category("fields").add("float_to_int", FloatIntCharWid);
