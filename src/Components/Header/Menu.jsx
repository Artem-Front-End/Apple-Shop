import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import style from './Header.module.css';

const Menu = () => {

    const [menu] = useState([
        {id: 1, title: 'Iphone', link: '/iphone'},
        {id: 2, title: 'Mac', link: '/mac'},
        {id: 3, title: 'AirPods', link: '/airpods'},
    ])

    return (
        <ul className={style.list} >
            {
                menu.map(item => (
                    <li key={item.id} ><NavLink to={item.link}>{item.title}</NavLink></li>
                ))
            }
        </ul>
    );
};

export default Menu;