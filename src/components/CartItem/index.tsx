import React from 'react';
import { Button } from '@material-ui/core';
import { CartItemType } from '../../App';

import { CartItemWrapper } from './CartItem.styles';

type Props = {
  item: CartItemType;
  addToCart: (clickItem: CartItemType) => void;
  removeItemFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({
  item,
  addToCart,
  removeItemFromCart,
}) => {
  return (
    <CartItemWrapper>
      <div>
        <h3>{item.title}</h3>
        <div className="information">
          <p>Price: ${item.price}</p>
          <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
        </div>

        <div className="button">
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addToCart(item)}>
            +
          </Button>

          <p>{item.amount}</p>

          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeItemFromCart(item.id)}>
            -
          </Button>
        </div>

        <img src={item.image} alt={item.title} />
      </div>
    </CartItemWrapper>
  );
};

export default CartItem;
