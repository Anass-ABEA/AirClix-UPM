import logo from './logo.png';
import './App.css';
import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Technicien from "./technicien/Technicien";



function App(){
    const id = "OK";
    return (
        <Router>
            <Switch>
                <Route exact={true} path="/">
                    <SplashScreen/>
                </Route>
                <Route path="/tech" >
                    <Technicien/>
                </Route>
                <Route path="/hello">
                    <div>
                        <h3>OK</h3>
                    </div>
                </Route>
            </Switch>
        </Router>
    )
}


function SplashScreen() {
    // eslint-disable-next-line no-undef
    let [message, setMessage] = useState("");

    function connectToServer() {
        const axios = require('axios');
        axios.get("http://localhost:8080/Hello").then(res => {
            changeMsg("Message recu du back end : \""+res.data+"\"");
        },err=>{
            changeMsg("Back end n'est pas accessible");
        })
    }
    function changeMsg(res){
        setMessage(res);
    }

    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Press the button to request a hello from the server
                </p>
                <button className="button" onClick={connectToServer}>
                    LOAD
                </button>
                <p>{message}</p>
            </header>
        </div>
    );
}

export default App;
