import {combineReducers} from 'redux';
import {ADD_ITEM_SUCCESS, SET_CART_SUCCESS, UPDATE_ITEM_SUCCESS} from '../actions/cartActions';

function array(state=[], action){
    let cart=[];
    switch (action.type){
        case ADD_ITEM_SUCCESS:
            const found = state.find(item=>item.id === action.item.id);
            if(found){
                return state.map(i=>{
                    if(i.id===action.item.id) return action.item;
                    return i;
                })
            }
            cart = [...state, action.item];
            localStorage.setItem("cart",JSON.stringify(cart));
            return cart;
        case SET_CART_SUCCESS:
            if(!action.cart) return [];
            return action.cart;
        case UPDATE_ITEM_SUCCESS:
            if(action.item.quantity === 0){
                return state.filter(i=>i.id !== action.item.id);
            }
            cart = state.map(i=>{
               if(i.id === action.item.id) return action.item;
               return i;
            });
            localStorage.setItem("cart",JSON.stringify(cart));
            return cart;

        default:
            return state;
    }
}

const cart = combineReducers({
   array
});

export default cart;