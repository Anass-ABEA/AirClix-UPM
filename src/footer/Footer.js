import React from "react";
import  "./footer.css";

export default function Footer() {
    return (
        <div className="container-fuild bg-dark">
            <div className="row m-0">
                <div className="col text-center">
                    <ul className="list-unstyled">
                        <li>
                            <a href="/">Acceuil</a>
                        </li>
                        <li>
                            <a href="/tech" target={"/tech"} >Interventions</a>
                        </li>
                        <li>
                            <a href="/tech/newintervention">Nouvelle Intervention</a>
                        </li>
                        <li>
                            <a href="/">Termes et Conditions</a>
                        </li>
                    </ul>
                    <p className="text-muted">© copyright 2021 | AirClick</p>
                </div>
            </div>
        </div>
    )
}
