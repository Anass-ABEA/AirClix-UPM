import SplashScreen from "../splash/SplashScreen";
import React, {useState} from "react";

export default function HomePage() {
    let [splash,setSplash] = useState(true);
    setTimeout(()=>{
        setSplash(false);
    },1000);
    return (
        <div>
            {
                splash && <SplashScreen/>
            }
            HomePage
        </div>
    )
}
