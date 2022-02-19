import React, { useEffect, useState } from 'react';
import { useTypedSelector } from "hooks/useTypedSelector";
import { cardData } from 'mock/mockCard'
import Form from "components/Form";

import Card from "../Card";
import Checkbox from "../Checkbox";
import Price from "../Price";
import Input from "../Input";

import styles from './App.module.scss'

const App = () => {
    const [data, setData] = useState(cardData)
    const [isShowModal, setIsShowModal] = useState(false)
    const [currentCardId, setCurrentCardId] = useState<number | null>(null)
    const { checkbox, input, priceUp, priceDown } = useTypedSelector((state) => state.filterReducer)

    const onBookedClick = (id: number): void => {
        setIsShowModal(true)
        setCurrentCardId(id)

        data.find((item) => item.id === id)!.isBooked = true
        setData([...data])
    }

    const closeModal = () => {
        setIsShowModal(false)
    }

    const getFilter = () => {
        let filtered = cardData;

        if (checkbox) {
            filtered = filtered.filter(({ isBooked }) => isBooked !== checkbox )
        }

        if (input) {
            filtered = filtered.filter(({ address }) => address.toLowerCase().includes(input.toLowerCase()))
        }

        if (priceUp) {
            filtered = [...filtered.sort(( a, b ) => a.price - b.price)]
        }

        if (priceDown) {
            filtered = [...filtered.sort(( a, b ) => b.price - a.price)]
        }

        setData(filtered)
    }

    useEffect(() => getFilter(), [checkbox, input, priceUp, priceDown])

      return (
        <>
            <div className={ styles.container }>
                <h2 className={ styles.title }>Сервис бронирования квартир</h2>
                <Input />
                <div className={ styles.filters } >
                    <Checkbox />
                    <Price />
                </div>

                <div className={ styles.cardWrapper }>
                    { data.map(item => (
                        <Card key={ item.id } card={ item } onBookedClick={(id) => onBookedClick(id)} />
                    ))}
                </div>
            </div>

            { isShowModal && <Form onCloseModal={ closeModal } cardId={ currentCardId } /> }
        </>
      )
    }

export default App;
