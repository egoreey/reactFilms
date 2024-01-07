import React from "react";
import {Header} from "../Components/Header.tsx";

export class Search extends React.Component{
    render() {
        return(
            <>
                <Header/>
                <main>
                    <div className="search_panel">
                        <div className="searching">
                            Поиск
                        </div>
                        <div className="search_panel_input">
                            <input className="search_input" placeholder="Введите название фильма, например «Титаник»"/>
                        </div>
                    </div>
                    <div className="recommendations_group">
                        <div className="group_name">
                            <h2 className="name_h2">Рекомендации</h2>
                            <a className="all" href="">Все</a>
                        </div>
                        <div className="recommendation_films">
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
                        <div className="oscar_group">
                            <div className="group_name">
                                <h2 className="name_h2">Оскар 2021</h2>
                                <a className="all" href="">Все</a>
                            </div>
                            <div className="recommendation_films">
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
                        </div>
                    </div>
                </main>
            </>
        )
    }
}