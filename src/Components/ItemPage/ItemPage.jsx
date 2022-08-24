import React from 'react';
import '../../index.css';

const ItemPage = ({data, add}) => {
    return (
        <div>
            <div className='itemPageLogo'  >
                <div className='itemPageBody' >
                    <img src={data.img} />
                    <p style={{marginTop: 30}} >{data.bodyText}</p>
                </div>
                <div>
                    <h2 >{data.title}</h2>
                    <p><span>Color:</span> {data.color}</p>
                    <p><span>Memory:</span> {data.memory}</p>
                    <h2>Price: {data.price}</h2>
                    <button onClick={() => add(data)} >Add</button>
                </div>
            </div>
        </div>
    );
};

export default ItemPage;