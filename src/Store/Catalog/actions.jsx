import {GET_ALL_PRODUCTS_ACTION, SET_PRODUCT_CATEGORY_ACTION} from "./constants";

export const getAllProductAction = (payload) => ({
    type: GET_ALL_PRODUCTS_ACTION,
    payload
});
export const getAllCategoriesAction = (payload) => ({
    type: GET_ALL_PRODUCTS_ACTION,
    payload
});
export const setProductsCategoryAction = (payload) => ({
    type: SET_PRODUCT_CATEGORY_ACTION,
    payload
});