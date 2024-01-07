import React from "react";
import {Header} from "../Components/Header.tsx";

export class Collection extends React.Component{
    render() {
        return(
            <>
                <Header/>
                <main>
                    <div className="collection_panel">
                        <div className="searching">
                            Коллекция
                        </div>
                    </div>
                    <div className="option_panel">
                        <div className="option_panel_words">
                            <p className="first">Буду смотреть</p>
                            <p className="second">Просмотрено</p>
                        </div>
                        <img src="/images/icon_list.svg" alt=""/>
                    </div>
                    <div className="films">
                        <div className="line1">
                            <div className="first_film">
                                <img src="/images/films/minari.svg" alt=""/>
                                    <h3>Минари</h3>
                            </div>
                            <div className="second_film">
                                <img src="/images/films/sunshining.svg" alt=""/>
                                    <h3>Солнцестояние</h3>
                            </div>
                            <div className="third_film">
                                <img src="/images/films/mank.svg" alt=""/>
                                    <h3>Манк</h3>
                            </div>
                            <div className="fourth_film">
                                <img src="/images/films/girl.svg" alt=""/>
                                    <h3>Девушка, пода...</h3>
                            </div>
                        </div>
                        <div className="line2">
                            <div className="first_film">
                                <img src="/images/films/earth.svg" alt=""/>
                                    <h3>Земля коче...</h3>
                            </div>
                            <div className="second_film">
                                <img src="/images/films/father.svg" alt=""/>
                                    <h3>Отец</h3>
                            </div>
                            <div className="third_film">
                                <img src="/images/films/drunk.svg" alt=""/>
                                    <h3>Еще по одной</h3>
                            </div>
                            <div className="fourth_film">
                                <img src="/images/films/soul.svg" alt=""/>
                                    <h3>Душа</h3>
                            </div>
                        </div>
                        <div className="line3">
                            <div className="first_film">
                                <img src="/images/films/godzilla.svg" alt=""/>
                                    <h3>Годзила</h3>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}