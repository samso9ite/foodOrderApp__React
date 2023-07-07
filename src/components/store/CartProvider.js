import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {items: [], totalAmount: 0}

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updatedItems = state.items.concat(action.item)
        const updatedAmount = state.totalAmount + action.item.price * action.item.amount
        return{
            items: updatedItems,
            totalAmount: updatedAmount        
        }
    }
    if(action.ype === 'REMOVE'){
        const updatedItems = state.items.filter(item => item.id !== action.id)
        // const updatedAmount = state.totalAmount - 
        return{
            items:updatedItems
        }
    }
    return defaultCartState
}

const CartProvider = (props) => {
    const [cartState , dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type:'REMOVE', id}) 
    }

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type:'ADD', item})
    }

   const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    removeItem: removeItemFromCartHandler,
    addItem: addItemToCartHandler
   }  

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider 