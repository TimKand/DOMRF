import React from 'react';
import { useDispatch } from "react-redux";
import { FilterActionTypes } from "store/reducers/filterReducer";

import styles from "./Checkbox.module.scss";

const Checkbox = () => {
    const dispatch = useDispatch()

    const onCheckboxChange = () => dispatch({ type: FilterActionTypes.CHECKBOX_CLICK })

    return (
        <div className={ styles.checkbox }>
            <input
                className={ styles.availability }
                type="checkbox"
                id="availability"
                name="subscribe"
                value="newsletter"
                onChange={ onCheckboxChange }
            />
            <label htmlFor="availability">доступны для бронирования</label>
        </div>
    );
};

export default Checkbox;
