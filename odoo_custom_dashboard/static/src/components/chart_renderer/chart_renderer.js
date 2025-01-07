/** @odoo-module */

import { registry } from "@web/core/registry"
import { loadJS } from "@web/core/assets";
import { useService } from "@web/core/utils/hooks"
const { Component, onWillStart, useRef, onMounted, useState } = owl

export class ChartRenderer extends Component {
    setup() {
        this.chartRef = useRef("chart");

        // Load the Chart.js library
        onWillStart(async () => {
            await loadJS("https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.0/chart.umd.min.js");
        });

        // Initialize the chart after the component is mounted
        onMounted(() => {
            this.renderChart()
        });
    }

    renderChart(){
        new Chart(this.chartRef.el, {
              type: 'doughnut',
              data:{
                labels: [
                    'Red',
                    'Blue',
                    'Yellow'
                  ],
                  datasets: [{
                    label: 'My First Dataset',
                    data: [300, 50, 100],
                    backgroundColor: [
                      'rgb(255, 99, 132)',
                      'rgb(54, 162, 235)',
                      'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                  }]
                  },
            });
    }
}

ChartRenderer.template = "owl.ChartRenderer"
