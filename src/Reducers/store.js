import {createStore} from "redux";
import reducers from "./reducers";
import uuid from "react-uuid";

export const inicialState = {
    formData: {
        name: '',
        description: '',
        number: '',
        speciality: '',
        direction: '',
        fromHour: '',
        toHour: '',
        nameAdm: '',
        surnameAdm: '',
        numberAdm: '',
        emailAdm: '',
        nameCom: '',
        surnameCom: '',
        numberCom: '',
        emailCom: '',
    },
    data: [
        {
            id: uuid(),
            name: 'Bar BQ',
            description: '',
            number: '+5491173646494',
            speciality: '',
            direction: 'av. vidal 2828, belgrano',
            fromHour: '',
            toHour: '',
            nameAdm: '',
            surnameAdm: '',
            numberAdm: '',
            emailAdm: '',
            nameCom: '',
            surnameCom: '',
            numberCom: '',
            emailCom: '',
        },
        {
            id: uuid(),
            name: 'El galpon de jose',
            number: '+546343435654',
            speciality: '',
            direction: 'calle 4511 nro 28, Palermo',
            fromHour: '',
            toHour: '',
            nameAdm: '',
            surnameAdm: '',
            numberAdm: '',
            emailAdm: '',
            nameCom: '',
            surnameCom: '',
            numberCom: '',
            emailCom: '',
        },
        {
            id: uuid(),
            name: 'Fanaticos de Asado',
            number: '+9654751251',
            speciality: '',
            direction: 'calle 74 nro 874, La Pampa',
            fromHour: '',
            toHour: '',
            nameAdm: '',
            surnameAdm: '',
            numberAdm: '',
            emailAdm: '',
            nameCom: '',
            surnameCom: '',
            numberCom: '',
            emailCom: '',
        },
    ]
};
//Redux store
let Store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
Store.subscribe(() => console.log(Store.getState()));

export default Store;