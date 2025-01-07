/** @odoo-module */

import { registry } from "@web/core/registry"
import { KpiCard } from "./kpi_card/kpi_card"
import { ChartRenderer } from "./chart_renderer/chart_renderer"
import { loadJS } from "@web/core/assets";
import { useService } from "@web/core/utils/hooks"
const { Component, onWillStart, useRef, onMounted, useState } = owl
import { getColor } from "@web/views/calendar/colors";
import { browser } from "@web/core/browser/browser"
import { routeToUrl } from "@web/core/browser/router_service"
const { DateTime } = luxon;

export class OwlSalesDashboard extends Component {
    setup() {
         this.state = useState({
            quotations: {
                value:10,
                percentage:6,
            },
            period:90,
        })
        this.actionService = useService("action")
        this.orm = useService("orm")

        onWillStart(async ()=>{
            await this.getDates()
            await this.getQuotations()
        });
    }

    async onChangePeriod(){
         await this.getDates()
         await this.getQuotations()
    }

    getDates(){
        const calculatedDate = DateTime.now().minus({ days: this.state.period });
        this.state.date = calculatedDate.toFormat("yyyy-MM-dd'T'HH:mm:ssZZ");
    }

    async getQuotations(){
        const data = await this.orm.searchCount("sale.order", [['state', 'in', ['sent', 'draft']],['date_order','>',this.state.date]])
        this.state.quotations.value = data
    }

    async viewQuotations(){
        this.actionService.doAction('sale.action_quotations_with_onboarding')
    }
}

OwlSalesDashboard.template = "owl.OwlSalesDashboard"
OwlSalesDashboard.components = { KpiCard, ChartRenderer}

registry.category("actions").add("owl.sales_dashboard", OwlSalesDashboard)