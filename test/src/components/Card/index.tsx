import React from 'react';
import classNames from 'classnames/bind';
import { CardData } from "mock/mockCard";

import styles from './Card.module.scss'

const cn = classNames.bind(styles);

interface CardProps {
    card: CardData;
    onBookedClick: (id: number) => void
}

const Card: React.FC<CardProps> = ({ card: {
    id,
    area,
    price,
    address,
    isBooked
    }, onBookedClick
}) => {
    const clickHandler = (cardId: number) => {
        onBookedClick(cardId)
    }

    return (
        <div className={ cn('container', { 'container--booked': isBooked }) }>
            <div className={ styles.image }>
                Фото
            </div>

            <div className={ styles.area}>
                площадь: { area }
            </div>

            <div className={ styles.price }>
                { price.toLocaleString('ru') } руб
            </div>

            <button className={ styles.button } onClick={ () => clickHandler(id) }>
                Забронировать
            </button>

            <div className={ styles.address }>
                { address }
            </div>
        </div>
    );
};

export default Card;
