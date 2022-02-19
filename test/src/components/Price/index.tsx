import React from 'react';
import { useDispatch } from "react-redux";
import { FilterActionTypes } from "store/reducers/filterReducer";

import styles from "./Price.module.scss";

const Price = () => {
    const dispatch = useDispatch()

    const onUpClick = () => dispatch({ type: FilterActionTypes.PRICE_UP })
    const onDownClick = () => dispatch({ type: FilterActionTypes.PRICE_DOWN })

    return (
        <div className={ styles.price }>
            цена
            <span onClick={ onUpClick } className={ styles.up } />
            <span onClick={ onDownClick } className={ styles.down } />
        </div>
    );
};

export default Price;
