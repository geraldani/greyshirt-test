import {TYPE_ACTIONS} from './constrants'
import {inicialState} from "./store";


const reducers = (state = inicialState, action) => {
    switch (action.type) {
        case TYPE_ACTIONS.SAVE_DATA:
            return Object.assign({}, state, {
                data: state.data.concat(action.data),
            });
        case TYPE_ACTIONS.DELETE_DATA:
            return Object.assign({}, state, {
                data: state.data.filter((value,index)=> {
                    return (index !== action.index)
                }),
            });
        default:
            return state;
    }
}

export default reducers;