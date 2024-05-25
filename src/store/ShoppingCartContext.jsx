import { createContext, useReducer } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";

export const CartContext = createContext({
    items: [],
});

function shoppingCartReducer(state, action) {}

// eslint-disable-next-line react/prop-types
export default function CartContextProvider({ children }) {
    const [shoppingCartState, dispatchCart] = useReducer(shoppingCartReducer, {
        items: [],
    });

    function handleAddItemToCart(id) {
        dispatchCart({
            type: "ADD_ITEM",
            payload: id,
        });
    }

    const ctxValue = {
        items: [],
    };

    return (
        <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
    );
}
