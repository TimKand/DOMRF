export interface CardData {
    id: number;
    area: number;
    price: number;
    address: string;
    isBooked: boolean
}
export const cardData: Array<CardData> = [
    {
        id: 1,
        area: 45,
        price: 11000500,
        address: 'Сиреневый сад',
        isBooked: false
    },
    {
        id: 2,
        area: 48,
        price: 10000500,
        address: 'Сиреневый сад',
        isBooked: false
    },
    {
        id: 3,
        area: 35,
        price: 9000500,
        address: 'Триколор',
        isBooked: false
    },
    {
        id: 4,
        area: 75,
        price: 16000000,
        address: 'Триколор',
        isBooked: true
    },
    {
        id: 5,
        area: 450,
        price: 99000000,
        address: 'Москва сити',
        isBooked: false
    },
    {
        id: 6,
        area: 95,
        price: 23000000,
        address: 'Левел Амурская',
        isBooked: false
    },
]
