/** @odoo-module */

import { Component, onMounted, onWillUnmount, useState, onWillStart, onRendered, onWillDestroy, onError, onWillPatch } from "@odoo/owl";

export class Timer extends Component {
    static template = "expense_tracker.timer";

    setup() {
        // Initialize state for the timer
        this.state = useState({
            time: {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            },
        });

        this.intervalId = null;

        // Example of `willStart`: Preparing data before rendering
        onWillStart(async () => {
            console.log("Timer willStart: preparing data before rendering.");
            await new Promise((resolve) => setTimeout(resolve, 500)); // Simulated delay
            const currentDate = new Date();
            const dateTime = this.env.datetime ? new Date(this.env.datetime) : currentDate;
            console.log("Value of this.env.datetime during willStart:", this.env.datetime);

            const initialTime = this.interval(currentDate, dateTime);
            this.state.time = { ...initialTime };
        });

        // Example of `onMounted`: Start the timer when the component is mounted
        onMounted(() => {
            console.log("Timer mounted and running.");
            this.intervalId = setInterval(() => {
                this.updateTime();
            }, 1000); // Update the time every second
        });

        // Example of `onRendered`: Called every time the component is rendered or re-rendered
        onRendered(() => {
            console.log("Timer is rendering/re-rendering.");
        });

        // Example of `onWillDestroy`: Clean up additional resources when the component is destroyed
        onWillDestroy(() => {
            console.log("Timer is destroyed, cleaning up resources.");
            this.state = null; // Clearing the state when the component is destroyed
        });

        // Example of `onError`: Handle any errors that occur during the lifecycle of the component
        onError((error) => {
            console.error("An error occurred in Timer component:", error);
            alert(`Error: ${error.message}`); // Show an alert to the user
        });

        // Example of `onWillPatch`: Called just before the state is patched
        onWillPatch(() => {
            console.log("Timer state will be patched:", this.state.time);
            // Example of attracting user attention: animate or highlight a part of the component
            // (For example, let's assume you want to highlight the 'seconds' part when it's updated)
            const secondsElement = document.getElementById('seconds');
            if (secondsElement) {
                // Apply a simple animation effect to attract attention
                secondsElement.classList.add('highlight-animation');
                setTimeout(() => {
                    secondsElement.classList.remove('highlight-animation');
                }, 500); // Highlight for 500ms
            }

        });
    }

    // Helper method for calculating intervals
    interval(date1, date2) {
        if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
            console.error("Invalid dates provided:", date1, date2);
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        let delta = Math.abs(date1 - date2) / 1000;

        const days = Math.floor(delta / 86400);
        delta -= days * 86400;

        const hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;

        const minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;

        const seconds = Math.floor(delta) % 60;

        return { days, hours, minutes, seconds };
    }

    // Updates the timer state
    updateTime() {
        let { days, hours, minutes, seconds } = this.state.time;

        seconds += 1;
        if (seconds === 60) {
            seconds = 0;
            minutes += 1;
        }
        if (minutes === 60) {
            minutes = 0;
            hours += 1;
        }
        if (hours === 24) {
            hours = 0;
            days += 1;
        }

        this.state.time = { days, hours, minutes, seconds };
        console.log("Updated time:", this.state.time);
    }
}
