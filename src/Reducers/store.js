import {createStore} from "redux";
import reducers from "./reducers";

//Redux store
let Store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
Store.subscribe(() => console.log(Store.getState()));

export default Store;