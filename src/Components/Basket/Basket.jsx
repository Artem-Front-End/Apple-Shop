import React, {useEffect, useState} from 'react';
import style from './Basket.module.css';

const Basket = ({data, remove}) => {
    let sum = 0;
    data.forEach(item => (
        sum = sum + item.price
    ))

    return (
        <div>
            <h1 style={{textAlign: 'center'}} >Basket</h1>
            <h1>Price: {sum}</h1>
            { data.length
              ? data.map(item => (
                    <div key={item.id} className={style.container} >
                        <div>
                            <h2>{item.title}</h2>
                            <img src={item.img} />
                        </div>
                        <p>{item.price} ГРН</p>
                        <button onClick={() => remove(item)} >X</button>
                    </div>
                ))
                : <h3>Basket is empty</h3>
            }
        </div>
    );
};

export default Basket;