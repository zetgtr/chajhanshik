import {
    ADD_CART_ACTION, CLEAR_CART_ACTION, DELETE_CART_ACTION,
    GET_CART_ACTION, REMOVE_CART_ACTION, SET_CART_ACTION
} from "./constants";

const initialState = {
    cart : [],
    count: 0,
    price: 0
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CART_ACTION: {
            let count = 0
            action.payload.forEach(el=>{
                count = count + el.count
            })
            return {
                ...state,
                cart: action.payload,
                count
            };
        }
        case SET_CART_ACTION: {
            return {
                ...state,
                cart: action.payload,
            };
        }
        case ADD_CART_ACTION: {
            const index = state.cart.findIndex(item => item && item.id === action.payload.id);
            if (index === -1) {
                return {
                    ...state,
                    cart: [...state.cart, {...action.payload,count: 1}],
                    count: ++state.count
                };
            } else {
                const updatedCart = [...state.cart];
                updatedCart[index].count++;
                return {
                    ...state,
                    cart: updatedCart,
                    count: ++state.count
                };
            }
        }
        case REMOVE_CART_ACTION: {
            const index = state.cart.findIndex(item => item && item.id === action.payload.id);
            console.log(index)
            return {
                ...state,
                count: state.count - state.cart[index]?.count,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            };
        }
        case DELETE_CART_ACTION: {
            const index = state.cart.findIndex(item => item && item.id === action.payload.id);
            if(state.cart[index].count > 1)
            {
                const updatedCart = [...state.cart];
                --updatedCart[index].count;
                return {
                    ...state,
                    count: --state.count,
                    cart: updatedCart
                };
            }else {
                return {
                    ...state,
                    count: --state.count,
                    cart: state.cart.filter(item => item.id !== action.payload.id)
                }
            }
        }
        case CLEAR_CART_ACTION: {
            return {
                ...state,
                cart: [],
                count: 0
            };
        }
        default:
            return state;
    }
}