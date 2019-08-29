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

export function deleteDelivery(i) {
    if (i>=0) {
        return {
            type:TYPE_ACTIONS.DELETE_DATA,
            index:i
        }
    }
}

export function updateDelivery(obj,i) {
    if (obj) {
        return {
            type:TYPE_ACTIONS.MODIFY_DATA,
            data:obj,
            index:i
        }
    }
}