import CartContext from "./cart-context";

const CartProvider = (props) => {
    const removeItemHandler = () => {}

    const addItemHandler = () => {}

   const cartContext = {
    items: [],
    totalAmount: 0,
    removeItem: removeItemHandler,
    addItem: addItemHandler
   }  

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider 