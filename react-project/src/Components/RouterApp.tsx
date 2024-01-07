import React from "react";
import {Route, Routes} from "react-router";
import {Hello} from "../Pages/Hello.tsx";
import {Collection} from "../Pages/Collection.tsx";
import {Add} from "../Pages/Add.tsx";
import {Search} from "../Pages/Search.tsx";
import {Profile} from "../Pages/Profile.tsx";

export class RouterApp extends React.Component{
    render() {
        return(
            <Routes>
                <Route path="/" element={<Hello/>}/>
                <Route path="/add" element={<Add/>}/>
                <Route path="/collection" element={<Collection/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        )
    }
}