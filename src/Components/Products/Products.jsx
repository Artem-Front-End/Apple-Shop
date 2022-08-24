import React from 'react';
import {NavLink} from "react-router-dom";

const Products = ({data, add, open}) => {

    const addToBasket = (e, item) => {
        e.preventDefault();
        add(item);
    }

    return (
        <div className='list' >
            {
                data.map(item => (
                    <div onClick={() => open(item)} className='block' key={item.id} >
                        <NavLink to={'/item' + item.id} >
                            <img src={item.img} />
                            <h2>{item.title}</h2>
                            <span>{item.price} грн</span>
                            <hr />
                            <button onClick={e => addToBasket(e, item)} >Add</button>
                        </NavLink>
                    </div>
                ))
            }
        </div>
    );
};

export default Products;