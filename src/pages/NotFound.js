import { useLocation } from "react-router-dom";
import Menu from "../components/Menu";

import React from 'react';
import ChromeDinoGame from 'react-chrome-dino';
export const Notfound = () => {
    const location = useLocation();

    return (
        <div id="app" className="notFound" style={{ background: "pink" }} >
            <div className="box menu" >
                <Menu />
            </div>
            <div id='box content' style={{ textAlign: 'center', width: '100%', height: '100%', marginTop: '5%', }}>
                <h1>"Page not found at {location.pathname}"</h1>
            </div >
            <div id="dino" style={{ overflow: 'hidden', height: "45%" }}>
                <ChromeDinoGame />
            </div>
            <div id="footer" style={{ textAlign: "right", marginRight: "5%" }}>
                <br /><br /><br /><br /><br /><br />
                <h3 >"team ROCKIN"</h3>
            </div>
        </div >
    )
}
// sytle={{
//     margin: '0 auto',
//     width: '300px'
// }}