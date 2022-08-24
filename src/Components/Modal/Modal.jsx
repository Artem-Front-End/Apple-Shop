import React from 'react';
import './Modal.css';

const Modal = ({active, setActive}) => {
    return (
        <div
            onClick={() => setActive(false)}
            className={active ? 'modal active' : 'modal'}
        >
            <div className='modalContent' onClick={e => e.stopPropagation()} >
                <h1>You already added this thing to basket!!</h1>
            </div>
        </div>
    );
};

export default Modal;