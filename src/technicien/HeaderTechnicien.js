import React from "react";
import "./header.css";
import logo from "../logo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCog, faHome, faPlus, faUser} from "@fortawesome/free-solid-svg-icons";

export default function HeaderTechnicien() {
    return (
        <div className="header-parent">
            <div className="logo">
                <img src={logo} alt="llogo AIR CLICK"/>
            </div>
            <div className="buttons">
                <a className="btn" href="/">
                    <FontAwesomeIcon icon={faHome}/>
                    Acceuil
                </a>
                <a className="btn" href="/">
                    <FontAwesomeIcon icon={faPlus}/>
                    Rapport
                </a>
                <a className="btn" href="/settings">
                    <FontAwesomeIcon icon={faCog}/>
                    Paramètres
                </a>

            </div>
            <div className="profile">
                <div className="profilePic">
                    <button className="btn">
                        John DOE
                        <FontAwesomeIcon className="icon" icon={faUser} size="lg "/>
                    </button>
                </div>
            </div>
        </div>
    )
}
