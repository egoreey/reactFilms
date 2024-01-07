import React from "react";
import {Header} from "../Components/Header.tsx";

export class Add extends React.Component{
    render() {
        return (
            <>
                <Header/>
                <main>
                    <div className="collection_panel">
                        <div className="about">
                            О фильме
                        </div>
                    </div>
                    <div className="option_panel">
                        <div className="option_panel_words">
                            <p className="first">КиноПоиск</p>
                            <p className="second">Вручную</p>
                        </div>
                    </div>
                    <div className="search_panel">
                        <div className="searching">
                            Название
                        </div>
                        <div className="search_panel_input">
                            <input className="search_input" placeholder="Например «Титаник»"></input>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}