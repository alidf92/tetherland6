import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Register from "./pages/Rigister/Register";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route exact path="/contactus" component={ContactUs} />
                <Route exact path="/" component={App} />
                <Route exact path="/register" component={Register} />
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
