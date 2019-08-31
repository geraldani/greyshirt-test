import {createStore} from "redux";
import reducers from "./reducers";
import data from '../data'

export const inicialState = data;

//Redux store
let Store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default Store;