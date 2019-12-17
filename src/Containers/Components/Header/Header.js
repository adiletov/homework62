import React from 'react';
import map from './img/map.png';
import {NavLink} from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
            <div className="header">
                <img src={map} alt="" />
                    <NavLink className="obl chuy" to="/chuy">Чуйская область</NavLink>
                    <NavLink className="obl issykkuly" to="/issykkul">Иссык-Кульская область</NavLink>
                    <NavLink className="obl naryn" to="/naryn">Нарынская область </NavLink>
                    <NavLink className="obl osh" to="/osh">Ошская область</NavLink>
                    <NavLink className="obl batken" to="/batken">Баткенская  область</NavLink>
                    <NavLink className="obl djalalabad" to="/djalalabad">Джалал-Абадская область</NavLink>
                    <NavLink className="obl talas" to="/talas">Талаская область</NavLink>

            </div>

    );
};

export default Header;