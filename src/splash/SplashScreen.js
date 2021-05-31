import React, {useState} from "react";
import logo from "../logo.png";

export default function SplashScreen() {
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
                    loading ...
                </p>
                <div className="d-none" >
                    <p>
                        Press the button to request a hello from the server
                    </p>
                    <button className="button" onClick={connectToServer}>
                        LOAD
                    </button>
                    <p>{message}</p>
                </div>
            </header>
        </div>
    );
}
