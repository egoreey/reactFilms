import React from "react";
import {Header} from "../Components/Header.tsx";

export class Profile extends React.Component{
    render() {
        return(
            <>
                <Header/>
                <main>
                    <div className="main_container">
                        <div className="name">
                            Анастасия
                        </div>
                        <div className="student">
                            Студентка, иллюстратор
                        </div>
                        <div className="photo">
                            <img className="photo_zen" src="/images/zendaya.svg" alt=""/>
                        </div>
                        <div className="favorites">
                            Любимые жанры
                        </div>
                        <div className="genres">
                            <div className="first_genre">Фантастика</div>
                            <div className="second_genre">Боевик</div>
                            <div className="third_genre">Триллер</div>
                        </div>
                        <div className="edit">
                            <img src="/images/edit.svg" alt=""/>
                                Редактировать
                        </div>
                    </div>
                </main>
            </>
        )
    }
}