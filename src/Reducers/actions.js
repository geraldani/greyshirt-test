import {TYPE_ACTIONS} from "./constrants";

export function addDelivery(datos,uuid) {
    if (datos) {
        datos.id = uuid;
        return {
            type:TYPE_ACTIONS.SAVE_DATA,
            data:datos,
        }
    }
}

export function romeveDelivery(i) {
    if (i>=0) {
        return {
            type:TYPE_ACTIONS.DELETE_DATA,
            index:i
        }
    }
}