import React, {useState} from "react";
import {useParams} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './technicien.css';
import moment from "moment";
import "moment/locale/fr";
import {reformatDate} from "../../helperClasses/DateHelper";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faDownload,
    faEyeSlash,
    faInfo,
    faMapMarked,
    faPhone, faPlus,
    faSearch
} from "@fortawesome/free-solid-svg-icons";
import {faFrown} from '@fortawesome/free-solid-svg-icons';

function myCard(element) {
    if (element == null) {
        return (
            <div className="no-element inter-card text-center">
                <FontAwesomeIcon icon={faFrown} size="4x" style={{alignSelf: "center"}}/>
                <h3>Aucun résultat ne correspond à votre recherche</h3>
            </div>
        )
    }
    return (
        <div className="inter-card">
            <div className="top-section">
                <img src={element.image} alt=""/>
                <div className="inter-name">
                    <strong>{element.company}</strong>
                    <span
                        className="text-muted">{reformatDate(element.date) + " (" + moment(element.date).fromNow() + ")"}</span>
                    {
                        element.state === 1 ?
                            <span className="etat etat-termine">Terminé</span>
                            :
                            <span className="etat etat-attente">En attente</span>
                    }
                </div>
                <div className="call align-self-center" style={{marginRight: 10}}>
                    <a href={"tel:" + element.tel}>
                        <FontAwesomeIcon icon={faPhone}/>
                        <span>Appeler</span>
                    </a>
                </div>
            </div>
            <div className="inter-body" style={{flex: 1}}>
                <div className="my-table">
                    <div className="my-row">
                        <div className="my-col align-self-center">
                            <strong>Résponssable</strong>
                        </div>
                        <div className="my-col">

                            <div style={{padding: "10px 0"}}>{element.responsable}</div>

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
                        <div className="my-col align-self-center">
                            <strong>Rapport</strong>
                        </div>
                        {
                            element.state === 0 ?
                                <div>
                                    <label htmlFor="formFileMultiple" className="form-label">Charger
                                        le rapport</label>

                                    <input className="form-control" type="file"
                                           id="formFileMultiple"
                                           accept="application/pdf"/>
                                </div>
                                :
                                <div className="my-col">
                                    {element.fileName}

                                </div>
                        }
                    </div>

                </div>
            </div>
            <div className="my-buttons">
                <div className="call">
                    <a target="_blank" href={element.rapport}>
                        <FontAwesomeIcon icon={faDownload}/>
                        <span>Rapport</span>
                    </a>
                </div>

                <div className="call">
                    <a target="_blank"
                       href={"https://www.google.com/maps/search/" + element.address}>
                        <FontAwesomeIcon icon={faMapMarked}/>
                        <span>naviguer</span>
                    </a>
                </div>

                <div className="call">
                    <a href={"/tech/" + element.id}>
                        <FontAwesomeIcon icon={faInfo}/>
                        <span>Détails</span>
                    </a>
                </div>


            </div>
        </div>
    );
}

export default function Technicien() {
    moment.locale('fr')
    console.log(useParams());
    let [overView, setOverview] = useState({
        past: 20,
        comming: 3,
        next: "2021/05/28 19:10",
        last: "2021/05/19 09:10"
    });


    let [recherche, setRecheche] = useState("");
    let [cards, setCards] = useState([
        {
            id: "ABCD",
            image: "https://i.pinimg.com/originals/02/52/28/0252284a8382aff1095d2dbd9d8f343a.png",
            company: "OCP SA",
            date: new Date("2021/05/29 10:10"),
            compresseur: "XM2001",
            rapport: "https://www.google.com",
            tel: "+212637958106",
            responsable: "Allal AHMADI",
            address: "130, Rabat Agdal, Rabat",
            fileName: "N/A",
            state: 0

        },
        {
            id: "ABCD",
            image: "https://i.pinimg.com/originals/02/52/28/0252284a8382aff1095d2dbd9d8f343a.png",
            company: "Colorado SA",
            date: new Date("2021/05/28 10:10"),
            compresseur: "XM2021",
            rapport: "https://www.google.com",
            tel: "+212637958106",
            responsable: "Kaddour BENTALEB",
            address: "130, Rabat Agdal, Rabat",
            fileName: "N/A",
            state: 0

        },
        {
            id: "ABCD",
            image: "https://i.pinimg.com/originals/02/52/28/0252284a8382aff1095d2dbd9d8f343a.png",
            company: "Bimo SA",
            date: new Date("2021/05/08 10:10"),
            compresseur: "AMAX 3000",
            rapport: "https://www.google.com",
            tel: "+212637958106",
            responsable: "Abbas AMANI",
            address: "130, Rabat Agdal, Rabat",
            fileName: "rapportX_12.pdf",
            state: 1

        },
        {
            id: "ABCD",
            image: "https://i.pinimg.com/originals/02/52/28/0252284a8382aff1095d2dbd9d8f343a.png",
            company: "Bimo SA",
            date: new Date("2021/05/08 10:10"),
            compresseur: "AMAX 3000",
            rapport: "https://www.google.com",
            tel: "+212637958106",
            responsable: "Abbas AMANI",
            address: "260, Rabat Agdal, Rabat",
            fileName: "rapportX_12.pdf",
            state: 1

        },
        {
            id: "ABCD",
            image: "https://i.pinimg.com/originals/02/52/28/0252284a8382aff1095d2dbd9d8f343a.png",
            company: "Bimo SA",
            date: new Date("2021/05/08 10:10"),
            compresseur: "AMAX 3000",
            rapport: "https://www.google.com",
            tel: "+212637958106",
            responsable: "Abbas AMANI",
            address: "123, AL mansour, Meknes",
            fileName: "rapportX_12.pdf",
            state: 1

        },
        {
            id: "ABCD",
            image: "https://i.pinimg.com/originals/02/52/28/0252284a8382aff1095d2dbd9d8f343a.png",
            company: "Bimo SA",
            date: new Date("2021/05/08 10:10"),
            compresseur: "AMAX 3000",
            rapport: "https://www.google.com",
            tel: "+212637958106",
            responsable: "Abbas AMANI",
            address: "130, Rabat Agdal, Rabat",
            fileName: "rapportX_12.pdf",
            state: 1,


        },
        {
            id: "ABCD",
            image: "https://i.pinimg.com/originals/02/52/28/0252284a8382aff1095d2dbd9d8f343a.png",
            company: "Bimo SA",
            date: new Date("2021/05/08 10:10"),
            compresseur: "AMAX 3000",
            rapport: "https://www.google.com",
            tel: "+212637958106",
            responsable: "Abbas AMANI",
            address: "130, Rabat Agdal, Rabat",
            fileName: "rapportX_12.pdf",
            state: 1

        },
        {
            id: "ABCD",
            image: "https://i.pinimg.com/originals/02/52/28/0252284a8382aff1095d2dbd9d8f343a.png",
            company: "Bimo SA",
            date: new Date("2021/05/08 10:10"),
            compresseur: "AMAX 3000",
            rapport: "https://www.google.com",
            tel: "+212637958106",
            responsable: "Abbas AMANI",
            address: "130, Rabat Agdal, Rabat",
            fileName: "rapportX_12.pdf",
            state: 1

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

    function applyFilters(cards) {
        let res = cards.filter(element => {
            recherche = recherche.toLowerCase();
            return element.compresseur.toLowerCase().includes(recherche) ||
                element.company.toLowerCase().includes(recherche) ||
                element.responsable.toLowerCase().includes(recherche) ||
                element.address.toLowerCase().includes(recherche)
        });
        if (res.length === 0) {
            return [null];
        }
        return res;
    }

    function handleChange(e) {
        console.log(e.target.value);
        setRecheche(e.target.value)
    }

    return (
        <div className="parent">
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
                                {moment().from(new Date(overView.next))}
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
                <div className="form-control search">
                    <FontAwesomeIcon icon={faSearch} color={"grey"} style={{marginRight: 10}}/>
                    <input type="text" className="form-control d-inline" placeholder={"Recherche"} value={recherche}
                           onChange={handleChange}/>
                </div>
                <div className="holder">
                    <div className="inter-card-holder">
                        <a href="/tech/newintervention" className="no-element inter-card text-center add-new">
                            <FontAwesomeIcon icon={faPlus} size="4x" style={{alignSelf: "center"}}/>
                            <h3>Ajouter Un Rapport</h3>
                        </a>
                        {
                            applyFilters(cards).map(element => {
                                return myCard(element);
                            })
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}
