// add item to cart

export const ADD_ITEM_SUCCESS = "ADD_ITEM_SUCCESS";
export const SET_CART_SUCCESS = "SET_CART_SUCCESS";
export const UPDATE_ITEM_SUCCESS = "UPDATE_ITEM_SUCCESS";

const addItem = (item)=>{
    return {
        type: ADD_ITEM_SUCCESS,
        item
    }
};

const setCart = (cart) =>{
  return {
      type: SET_CART_SUCCESS,
      cart
  }
};

const updateItem = (item) =>{
    return {
        type: UPDATE_ITEM_SUCCESS,
        item
    }
};

export const getInitialCart = () => (dispatch) =>{
    const cart = JSON.parse(localStorage.getItem("cart"));
    return dispatch(setCart(cart));
};

export const addItemAction = (item) => (dispatch) =>{
    return dispatch(addItem(item));
};

export const updateItemAction = (item) => (dispatch) =>{
    return dispatch(updateItem(item));
};