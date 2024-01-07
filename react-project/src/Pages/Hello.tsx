import React from "react";
import {Header} from "../Components/Header.tsx";

export class Hello extends React.Component {
    render() {
        return(
            <>
                <Header/>
                <main className="main">
                    <div className="main_container">
                        <img src="/images/Watch_Later_Logo_Full.svg" alt=""/>
                    </div>
                    <div className="agona_logo">
                        <img src="/images/Агона%20логотип.svg" alt=""/>
                    </div>
                </main>
            </>
        )
    }
}