import { StateActionTypes, CustomAction } from './common.action';

const initialState = {
  cartProducts: [],
  totalProductsInCart: 0,
}

export function commonReducer(state = initialState, action: CustomAction) {
  switch (action.type) {

    case StateActionTypes.getStoreValue:
      return { ...state };

    case StateActionTypes.setStoreValue:
      let _addNewProducts = [...state.cartProducts, ...action.payload]
      return {
        ...state,
        cartProducts: _addNewProducts,
        totalProductsInCart: _addNewProducts.length
      }

    case StateActionTypes.removeStoreValue:
      let _newArray = [...state.cartProducts];
      let _index = _newArray.findIndex(x => x.id === action.payload);
      _newArray.splice(_index, 1);
      return { cartProducts: _newArray, totalProductsInCart: _newArray.length };

    default:
      return { ...state };
  }
}
