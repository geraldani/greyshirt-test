import {TYPE_ACTIONS} from './constrants'
import {inicialState} from "./store";

function newArray(dataArray, i, eleEdited) {
    let newArray = [];
    dataArray.map((elem, index,arr) => {
        index === i ? newArray[index] = eleEdited : newArray[index] = elem
        return arr
    })
    return newArray;
}
const reducers = (state = inicialState, action) => {
    switch (action.type) {
        case TYPE_ACTIONS.SAVE_DATA:
            return Object.assign({}, state, {
                data: state.data.concat(action.data),
            });
        case TYPE_ACTIONS.DELETE_DATA:
            return Object.assign({}, state, {
                data: state.data.filter((value, index) => {
                    return (index !== action.index)
                }),
            });
        case TYPE_ACTIONS.MODIFY_DATA:
            return Object.assign({}, state, {
                data: newArray(state.data, action.index, action.data),
            });
        default:
            return state;
    }
}
export default reducers;