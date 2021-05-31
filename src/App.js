import logo from './logo.png';
import './App.css';
import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Technicien from "./technicien/main/Technicien";
import DetailsRapport from "./technicien/detailsRapport/DetailsRapport";
import SplashScreen from "./splash/SplashScreen";
import HomePage from "./LandingPage/HomePage";
import Footer from "./footer/Footer";



function App(){
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact={true} path="/">
                        <HomePage/>
                    </Route>
                    <Route path="/tech" exact={true}>
                        <Technicien/>
                    </Route>
                    <Route path="/tech/:idRapport" >
                        <DetailsRapport/>
                    </Route>
                    <Route path="/hello">
                        <div>
                            <h3>OK</h3>
                        </div>
                    </Route>
                </Switch>
            </Router>
            <Footer/>
        </div>
    )
}



export default App;
