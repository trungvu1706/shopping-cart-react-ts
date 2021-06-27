import React from 'react';
import { Button } from '@material-ui/core';
import { CartItemType } from '../../App';

import { ItemWrapper } from './Item.styles';

type Props = {
  item: CartItemType;
  handleAddToCart: (clickItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  return (
    <ItemWrapper>
      <img src={item.image} alt="image" />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>{item.price}</h3>
      </div>

      <Button onClick={() => handleAddToCart(item)}>
        Add to cart
      </Button>
    </ItemWrapper>
  );
};

export default Item;
