import React, { Component, Fragment } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Food from "./food.js";
import Faces from "./faces.js";
import Time from "./time.js";

class App extends Component {

    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand navbar-light bg-light bg-gradient px-3 mb-3">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link to={`/food/\u{1f34b}/Lemon`} className="nav-link">Food</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/faces/\u{1f607}/Saint`} className="nav-link">Faces</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/time/\u{1f550}/1:00`} className="nav-link">Time</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                    </ul>
                </nav>

                { /* Route components are rendered if the path prop matches the current URL */}
                <Switch>
                    <Route path="/food">
                        <Food />
                    </Route>
                    <Route path="/faces">
                        <Faces />
                    </Route>
                    <Route path="/time">
                        <Time />
                    </Route>
                </Switch>
            </Fragment>
        );
    }
}

export default App;