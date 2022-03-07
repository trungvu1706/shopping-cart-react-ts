import React from 'react'
import { CartItemType } from '../../App'
import CartItem from '../CartItem'
import { CartWrapper } from './Cart.styles'

type Props = {
  cartItems: CartItemType[]
  addToCart: (clickItem: CartItemType) => void
  removeFromCart: (id: number) => void
}

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotalItem = (items: CartItemType[]) => {
    return items.reduce((acc: number, item) => {
      return acc + item.amount * item.price
    }, 0)
  }

  return (
    <CartWrapper>
      <h2>Your shopping cart</h2>
      {cartItems.length === 0 && <p>No items in cart</p>}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeItemFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotalItem(cartItems).toFixed(2)}</h2>
    </CartWrapper>
  )
}

export default Cart
