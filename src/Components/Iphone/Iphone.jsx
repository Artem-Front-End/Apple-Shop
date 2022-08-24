import React from 'react';
import '../../index.css';
import {NavLink} from "react-router-dom";
import Products from "../Products/Products";

const Iphone = ({data, open, add}) => {
    return (
        <Products data={data} open={open} add={add} />
    );
};

export default Iphone;