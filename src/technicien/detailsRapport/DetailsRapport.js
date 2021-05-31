import React from "react";

import {useParams} from "react-router-dom";


export default function DetailsRapport() {
    const ID_RAPPORT = useParams().idRapport;
    return (
        <div>
            HELLO DETAILS for id : {ID_RAPPORT}
        </div>
    )
}
