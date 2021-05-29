import React, {useState} from "react";
import {useParams} from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './technicien.css';
import moment from "moment";
import "moment/locale/fr";
import {myMoment, reformatDate} from "../helperClasses/DateHelper";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload, faPhone} from "@fortawesome/free-solid-svg-icons";

export default function Technicien() {
    moment.locale('fr')
    console.log(useParams());
    let [overView, setOverview] = useState({
        past: 20,
        comming: 3,
        next: "2021/05/28 19:10",
        last: "2021/05/19 09:10"
    });

    let [cards, setCards] = useState([
        {
            image: "https://i.pinimg.com/originals/02/52/28/0252284a8382aff1095d2dbd9d8f343a.png",
            company: "OCP SA",
            location: [
                1, 1
            ],
            date: new Date("2021/05/28 10:10"),
            compresseur: "XM2001",
            rapport: "https://www.google.com",
            tel: "+212637958106",
            responsable: "Allal AHMADI",
            address:"130, Rabat Agdal, Rabat",
            fileName:"Raport_X21.pdf"

        },
        {
            image: "https://i.pinimg.com/originals/02/52/28/0252284a8382aff1095d2dbd9d8f343a.png",
            company: "Colorado SA",
            location: [
                1, 1
            ],
            date: new Date("2021/05/10 10:10"),
            compresseur: "XM2021",
            rapport: "https://www.google.com",
            tel: "+212637958106",
            responsable: "Kaddour BENTALEB",
            address:"130, Rabat Agdal, Rabat",
            fileName:"rapportX_12.pdf"

        },
        {
            image: "https://i.pinimg.com/originals/02/52/28/0252284a8382aff1095d2dbd9d8f343a.png",
            company: "Bimo SA",
            location: [
                1, 1
            ],
            date: new Date("2021/05/08 10:10"),
            compresseur: "AMAX 3000",
            rapport: "https://www.google.com",
            tel: "+212637958106",
            responsable: "Abbas AMANI",
            address:"130, Rabat Agdal, Rabat",
            fileName:"rapportX_12.pdf"

        },
        {
            image: "https://i.pinimg.com/originals/02/52/28/0252284a8382aff1095d2dbd9d8f343a.png",
            company: "Bimo SA",
            location: [
                1, 1
            ],
            date: new Date("2021/05/08 10:10"),
            compresseur: "AMAX 3000",
            rapport: "https://www.google.com",
            tel: "+212637958106",
            responsable: "Abbas AMANI",
            address:"130, Rabat Agdal, Rabat",
            fileName:"rapportX_12.pdf"

        },
        {
            image: "https://i.pinimg.com/originals/02/52/28/0252284a8382aff1095d2dbd9d8f343a.png",
            company: "Bimo SA",
            location: [
                1, 1
            ],
            date: new Date("2021/05/08 10:10"),
            compresseur: "AMAX 3000",
            rapport: "https://www.google.com",
            tel: "+212637958106",
            responsable: "Abbas AMANI",
            address:"130, Rabat Agdal, Rabat",
            fileName:"rapportX_12.pdf"

        },
        {
            image: "https://i.pinimg.com/originals/02/52/28/0252284a8382aff1095d2dbd9d8f343a.png",
            company: "Bimo SA",
            location: [
                1, 1
            ],
            date: new Date("2021/05/08 10:10"),
            compresseur: "AMAX 3000",
            rapport: "https://www.google.com",
            tel: "+212637958106",
            responsable: "Abbas AMANI",
            address:"130, Rabat Agdal, Rabat",
            fileName:"rapportX_12.pdf"

        },
        {
            image: "https://i.pinimg.com/originals/02/52/28/0252284a8382aff1095d2dbd9d8f343a.png",
            company: "Bimo SA",
            location: [
                1, 1
            ],
            date: new Date("2021/05/08 10:10"),
            compresseur: "AMAX 3000",
            rapport: "https://www.google.com",
            tel: "+212637958106",
            responsable: "Abbas AMANI",
            address:"130, Rabat Agdal, Rabat",
            fileName:"rapportX_12.pdf"

        },
        {
            image: "https://i.pinimg.com/originals/02/52/28/0252284a8382aff1095d2dbd9d8f343a.png",
            company: "Bimo SA",
            location: [
                1, 1
            ],
            date: new Date("2021/05/08 10:10"),
            compresseur: "AMAX 3000",
            rapport: "https://www.google.com",
            tel: "+212637958106",
            responsable: "Abbas AMANI",
            address:"130, Rabat Agdal, Rabat",
            fileName:"rapportX_12.pdf"

        }
    ]);
/*
    function cardElement(element){
        return (
            <div className="inter-card">
                <div className="top-section">
                    <img src={element.image} alt=""/>
                    <div className="inter-name">
                        <strong>{element.company}</strong>
                        <span
                            className="text-muted">{reformatDate(element.date) + " (" + moment(element.date).fromNow() + ")"}</span>
                    </div>
                </div>
                <div className="inter-body">
                    <div className="my-table">
                        <div className="my-row">
                            <div className="my-col">
                                <strong>Résponssable</strong>
                            </div>
                            <div className="my-col">
                                {element.responsable}
                                <div className="call">
                                    <a href={"tel:"+element.tel}>
                                        <FontAwesomeIcon icon={faPhone}/>
                                        <span>Appeler</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div className="my-row">
                            <div className="my-col">
                                <strong>Date de modification</strong>
                            </div>
                            <div className="my-col">
                                {reformatDate(element.date)}
                            </div>

                        </div>
                        <div className="my-row">
                            <div className="my-col">
                                <strong>fichier</strong>
                            </div>
                            <div className="my-col">
                                {element.fileName}
                                <div className="call">
                                    <a target="_blank" href={element.rapport}>
                                        <FontAwesomeIcon icon={faDownload}/>
                                        <span>Télécharger</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
*/

    return (
        <div>
            <div className="container-fluid p-md-4 header">
                <h2>Aperçu</h2>
                <div className="holder">
                    <div className="wrapper">
                        <div className="mcard">
                            <div className="title">
                                <strong>interventions effectués</strong>
                            </div>
                            <h4>
                                {overView.past}
                            </h4>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="mcard">
                            <div className="title">
                                <strong>Prochaine Intervention</strong>
                            </div>
                            <h5>
                                {moment(new Date(overView.next)).fromNow()}
                            </h5>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="mcard">
                            <div className="title">
                                <strong>Intervention en attente</strong>
                            </div>
                            <h4>{overView.comming}</h4>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="mcard">
                            <div className="title">
                                <strong>Dernière intervention</strong>
                            </div>
                            <h5>
                                {moment(new Date(overView.last)).fromNow()}
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <h2>Vos Interventions</h2>
                <div className="holder">
                    <div className="inter-card-holder">
                        {cards.map(element => {
                            return <div className="inter-card">
                                <div className="top-section">
                                    <img src={element.image} alt=""/>
                                    <div className="inter-name">
                                        <strong>{element.company}</strong>
                                        <span
                                            className="text-muted">{reformatDate(element.date) + " (" + moment(element.date).fromNow() + ")"}</span>
                                    </div>
                                </div>
                                <div className="inter-body">
                                    <div className="my-table">
                                        <div className="my-row">
                                            <div className="my-col">
                                                <strong>Résponssable</strong>
                                            </div>
                                            <div className="my-col">
                                                {element.responsable}
                                                <div className="call">
                                                    <a href={"tel:"+element.tel}>
                                                        <FontAwesomeIcon icon={faPhone}/>
                                                        <span>Appeler</span>
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="my-row">
                                            <div className="my-col">
                                                <strong>Date de modification</strong>
                                            </div>
                                            <div className="my-col">
                                                {reformatDate(element.date)}
                                            </div>

                                        </div>
                                        <div className="my-row">
                                            <div className="my-col">
                                                <strong>fichier</strong>
                                            </div>
                                            <div className="my-col">
                                                {element.fileName}
                                                <div className="call">
                                                    <a target="_blank" href={element.rapport}>
                                                        <FontAwesomeIcon icon={faDownload}/>
                                                        <span>Télécharger</span>
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>;
                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}
