import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import common_pl from "./translations/pl/common.json";
import common_en from "./translations/en/common.json";

import 'bootstrap/dist/css/bootstrap.min.css';

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'pl',                              // language to use
    resources: {
        en: {
            common: common_en               // 'common' is our custom namespace
        },
        pl: {
            common: common_pl
        },
    },
});

ReactDOM.render(<I18nextProvider i18n={i18next}><App /></I18nextProvider>, document.getElementById('root'));
