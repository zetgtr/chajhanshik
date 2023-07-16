import {ADD_CART_ACTION, CLEAR_CART_ACTION, DELETE_CART_ACTION, GET_CART_ACTION, REMOVE_CART_ACTION} from "./constants";

export const getCartAction = (payload) => ({
    type: GET_CART_ACTION,
    payload
});
export const addCartAction = (payload) => ({
    type: ADD_CART_ACTION,
    payload
});
export const removeCartAction = (payload) => ({
    type: REMOVE_CART_ACTION,
    payload
});
export const deleteCartAction = (payload) => ({
    type: DELETE_CART_ACTION,
    payload
});
export const clearCartAction = () => ({
    type: CLEAR_CART_ACTION
});
