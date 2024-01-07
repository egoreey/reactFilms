import React from "react";
import {Link} from "react-router-dom";

export class Header extends React.Component{
    render() {
        return(
            <header className="header">
                <div className="header_left">
                    <Link to={"/collection"} className="collection">
                        <img className="movie_element" src="/images/movieelement.svg" alt=""/>
                            Коллекция
                    </Link>
                    <Link to={"/add"} className="add">
                        <img className="plus_image" src="/images/plus.svg" alt=""/>
                            Добавить
                    </Link>
                </div>
                <div className="header_logo">
                    <Link to={"/"}>
                        <img className="logo" src="/images/Watch_Later_Logo_Short.svg" alt=""/>
                    </Link>
                </div>
                <div className="header_right">
                    <Link to={"/search"} className="panel">
                        <img src="/images/search.svg" alt=""/>
                            Поиск
                    </Link>
                    <div className="user_photo">
                        <Link to={"/profile"}>
                            <img src="/images/zendaya.svg" alt=""/>
                        </Link>
                    </div>
                </div>
            </header>
    )
    }
}
