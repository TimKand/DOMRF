import { Dispatch } from 'redux';

type Info = {
    email: string
    firstName: string
    phone: string
    id: number
}

export const bookAnApartment = (info: Info) => {
    return async (dispatch: Dispatch<{ type: string, payload: number }>) => {
        const req = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ info }),
        })
        const result = await req.json()

        dispatch({ type: 'BOOKED_SUCCESS', payload: result.info.id }) // Делаем фильтрацию на стороне redux, но, чтобы было проще реализовал это в компоненте
    }
}
