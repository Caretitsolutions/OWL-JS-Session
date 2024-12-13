/** @odoo-module */

import { rpcService } from "@web/core/network/rpc_service";
import { App, EventBus } from "@odoo/owl";
import { templates } from "@web/core/assets";
import { ExpenseTracker } from "./expense_tracker";

owl.whenReady(async() => {

    const translations = {};
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang');
    let translationBundle;
    if (lang) {
        const terms = {
            fr_FR: {
                "Home": "Maison",
                "Description": "Description",
                "Date:": "Date",
                "Amount": "Montante",
                "Category": "Catégorie",
                "Categories": "Catégories",
            }
        };
        Object.assign(translations, terms);
        console.log("Translating:", "->", translations[lang] );

        translationBundle = translations[lang];
    }
    const getTranslation = (str) => {
        if (!translationBundle) {
            return str;
        }
        return translationBundle[str] || str;
    }

    const app = new App(ExpenseTracker, {
//    env,
    templates,
    warnIfNoStaticProps : true,
    name: ExpenseTracker.constructor.name,
    translateFn: getTranslation,
    });

    const root = await app.mount(document.body);
});