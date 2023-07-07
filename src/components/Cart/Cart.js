import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import { useContext } from 'react'
import CartContext from '../store/cart-context'
import CartItemMain from './CartItem'

const CartItem = (props) => {
    const cartCtx = useContext(CartContext) 
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`        
    const cartAddHandler = (item) => {}
    const cartRemoveHandler = (id) => {}

    const showOrder = cartCtx.items.length > 0

    const cartItems = <ul className={classes['cart-items']}>
    {cartCtx.items.map((item) => (
        <CartItemMain 
            key={item.id}
            amount={item.amount}
            price= {item.price}
            name={item.name}
            onRemove={cartRemoveHandler.bind(null, item.id)}
            onAdd = {cartAddHandler.bind(null, item)}
        />
        ))}
    </ul>
  
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {showOrder && <button className={classes.button}>Order</button>}
            </div>

        </Modal>
    )
}

export default CartItem     