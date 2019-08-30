import {createStore} from "redux";
import reducers from "./reducers";
import uuid from "react-uuid";

export const inicialState = {
    data: [
        {
            id: uuid(),
            name: 'Bar BBQ',
            description: 'un lugar para hacer barbeque',
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
            description:'un galpon bonito',
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
            description:'somos fanaticos de la carne',
            number: '+9654751251',
            speciality: '',
            direction: 'calle 74 nro 874, La Pampa',
            fromHour: '14:07',
            toHour: '00:01',
            nameAdm: '',
            surnameAdm: '',
            numberAdm: '',
            emailAdm: '',
            nameCom: '',
            surnameCom: '',
            numberCom: '',
            emailCom: '',
        }
    ]
};
//Redux store
let Store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
Store.subscribe(() => console.log(Store.getState()));

export default Store;