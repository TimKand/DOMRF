import React  from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from "react-redux";
import { bookAnApartment } from "store/thunk";

import styles from './Form.module.scss'

const Form: React.FC<{ onCloseModal: VoidFunction, cardId: number | null }> = ({ onCloseModal, cardId}) => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const dispatch = useDispatch()

    const onSubmit = (data: any) => {
        onCloseModal()
        dispatch(bookAnApartment(data))
    };
    return (
       <div className={ styles.container }>
           <form onSubmit={ handleSubmit(onSubmit) }>
               <label htmlFor='firstName'>Имя*</label>
               <input { ...register('firstName', { required: true }) } id='firstName' />
               { errors.firstName && <p className={ styles.errorMessage }>Заполните поле Имя</p> }

               <label htmlFor='phone'>Телефон*</label>
               <input { ...register('phone', { required: true }) } id='phone' />
               { errors.phone && <p className={ styles.errorMessage }>Заполните поле Телефон</p> }

               <label htmlFor='email'>Email*</label>
               <input { ...register('email', { required: true }) } id='email' />
               { errors.email && <p className={ styles.errorMessage }>Заполните поле Email</p> }

               <input className={ styles.invisible } { ...register('id', { required: true, value: cardId }) } id='email' />

               <input type="submit" className={ styles.button } />
           </form>

           <div className={ styles.close } onClick={ onCloseModal }>
               &times;
           </div>
       </div>
    );
};

export default Form
