import React from 'react';
import { useDispatch } from "react-redux";
import { FilterActionTypes } from "store/reducers/filterReducer";

import styles from "./Input.module.scss";

const Input = () => {
    const dispatch = useDispatch()

    const onInputChange = (value: string) => dispatch({ type: FilterActionTypes.INPUT_CHANGE, payload: value })

    return (
        <input
            type="text"
            className={ styles.search }
            placeholder='Поиск'
            onChange={ (event => onInputChange(event.target.value)) }
        />
    );
};

export default Input;
