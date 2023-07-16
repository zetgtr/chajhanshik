import {
    GET_ALL_CATEGORIES_ACTION,
    GET_ALL_PRODUCTS_ACTION,
    SET_PRODUCT_CATEGORY_ACTION
} from "./constants";

const initialState = {
    products: [{
        id: 1,
        category_id: 1,
        title: "Набор 1",
        desc: "Какой-то текст...",
        price: 100,
        img: "https://ilovesakura.ru/_next/image?url=https%3A%2F%2Filovesakura.ru%2Fimg%2Fd7f3538030b55523580a5b60ee8760be&w=640&q=75"
    },{
        id: 2,
        category_id: 2,
        title: "Кухня 1",
        desc: "Какой-то текст...",
        price: 500,
        img: "https://ilovesakura.ru/_next/image?url=https%3A%2F%2Filovesakura.ru%2Fimg%2F06798750a14b00d0214c2b0a6b00ba6c&w=384&q=75"
    }],
    categories: [
    {
        id: 1,
        title: "Наборы",
        img: "https://ilovesakura.ru/_next/image?url=https%3A%2F%2Filovesakura.ru%2Fimg%2F54913ae70a413df32bec510d83383d1f&w=384&q=75"
    },
    {
        id: 2,
        title: "Корейская кухня",
        img: "https://ilovesakura.ru/_next/image?url=https%3A%2F%2Filovesakura.ru%2Fimg%2F06798750a14b00d0214c2b0a6b00ba6c&w=384&q=75"
    }],
    productCategory: {},
    filter: [],
    loading: true,
};

export const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS_ACTION: {
            return {
                ...state,
                loading: false,
            };
        }
        case GET_ALL_CATEGORIES_ACTION: {
            return {
                ...state,
                categories: action.payload,
                loading: false,
            };
        }
        case SET_PRODUCT_CATEGORY_ACTION: {
            return {
                ...state,
                productCategory: state.products.filter(el=>el.id === action.payload),
                loading: false,
            };
        }
        default:
            return state;
    }
}