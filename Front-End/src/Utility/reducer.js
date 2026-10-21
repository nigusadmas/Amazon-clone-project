import { Type } from "./actionTypes";
export const initialState = {
  basket: [],
};
export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      {
        const matchingItems = state.basket.filter(
          (item) => item.id === action.item.id,
        );
        const otherItems = state.basket.filter(
          (item) => item.id !== action.item.id,
        );
        const existingQuantity = matchingItems.reduce(
          (quantity, item) => quantity + (item.quantity || 1),
          0,
        );

        return {
          ...state,
          basket: [
            ...otherItems,
            {
              ...(matchingItems[0] || action.item),
              quantity: existingQuantity + 1,
            },
          ],
        };
      }
    case Type.UPDATE_BASKET_QUANTITY:
      return {
        ...state,
        basket: state.basket
          .map((item) =>
            item.id === action.id
              ? { ...item, quantity: (item.quantity || 1) + action.change }
              : item,
          )
          .filter((item) => item.quantity > 0),
      };

    default:
      return state;
  }
};
