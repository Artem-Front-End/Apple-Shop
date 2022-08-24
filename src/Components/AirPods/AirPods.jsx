import React from 'react';
import {NavLink} from "react-router-dom";
import '../../index.css';
import Products from "../Products/Products";

const AirPods = ({data, open, add}) => {
    return (
        <Products data={data} open={open} add={add} />
    );
};

export default AirPods;