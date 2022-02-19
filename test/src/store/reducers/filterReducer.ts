interface FilterState {
    checkbox: boolean,
    input: string,
    priceUp: boolean,
    priceDown: boolean
}

interface FilterAction {
    type: string;
    payload?: any
}

export enum FilterActionTypes {
    CHECKBOX_CLICK = 'CHECKBOX_CLICK',
    INPUT_CHANGE = 'INPUT_CHANGE',
    PRICE_UP = 'PRICE_UP',
    PRICE_DOWN = 'PRICE_DOWN',
}

export const initialState: FilterState = {
    checkbox: false,
    input: '',
    priceUp: false,
    priceDown: false,
}

export const filterReducer = (state = initialState, action: FilterAction): FilterState => {
    switch (action.type) {
        case FilterActionTypes.CHECKBOX_CLICK:
            return { ...state, checkbox: !state.checkbox }

        case FilterActionTypes.INPUT_CHANGE:
            return { ...state, input: action.payload }

        case FilterActionTypes.PRICE_UP:
            return { ...state, priceUp: true, priceDown: false }

        case FilterActionTypes.PRICE_DOWN:
            return { ...state, priceDown: true, priceUp: false }


        default: return state
    }
}
