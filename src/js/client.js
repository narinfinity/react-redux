import React from "react";
import ReactDom from "react-dom";
import {Provider} from "react-redux";

import Layout from "./components/Layout";
import Store from "./store";

ReactDom.render(<Provider store={Store}><Layout /></Provider>,
document.getElementById('app'));