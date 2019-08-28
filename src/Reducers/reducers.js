import uuid from "react-uuid";
import {SAVE_DATA} from './constrants'

const inicialState = {
    frormData: {
        name: '',
        description: '',
        number: 0,
        speciality: '',
        direction: '',
        fromHour: 0,
        toHour: 0,
        nameAdm: '',
        surnameAdm: '',
        numberAdm: 0,
        emailAdm: '',
        nameCom: '',
        surnameCom: '',
        numberCom: 0,
        emailCom: '',
    },
    data: [
        {
            id: uuid(),
            name: 'Bar BQ',
            number: '+5491173646494',
            direction: 'av. vidal 2828, belgrano',

        },
        {
            id: uuid(),
            name: 'El galpon de jose',
            number: '+546343435654',
            direction: 'calle 4511 nro 28, Palermo',
        },
        {
            id: uuid(),
            name: 'Fanaticos de Asado',
            number: '+9654751251',
            direction: 'calle 74 nro 874, La Pampa',
        },
    ]
};

const reducers = (state = inicialState, action) => {
    switch (action.type) {
        case SAVE_DATA:
            return Object.assign({}, state, {
                status: ENTER_PRODUCTS_STATUS,
                items: addProduct(state.items, action.product, action.amount),
                bill: bill(state.bill, action)
            });

        default:
            return state;
    }
}

export default reducers;