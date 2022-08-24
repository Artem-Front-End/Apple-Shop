import React from 'react';
import style from './Header.module.css';
import Menu from "./Menu";
import {NavLink} from "react-router-dom";
import image from './icons8-basket-30.png';
const Header = () => {
    return (
        <div>
            <header className={style.header} >
                <h1><span className={style.span} >Apple S</span>tore</h1>
                <div className={style.contacts} >
                    <p><span className={style.span} >+38 (050)</span> 828 03 59</p>
                    <p><span className={style.span} >+38 (050)</span> 567 02 51</p>
                </div>
                <NavLink to='/basket'>
                    <img className={style.basket} src={image} />
                </NavLink>
            </header>
            <Menu />
        </div>
    );
};

export default Header;