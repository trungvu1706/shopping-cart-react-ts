import {
  Badge,
  Drawer,
  Grid,
  LinearProgress,
} from '@material-ui/core';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { StyledButton, Wrapper } from './App.styles';
import Cart from './components/Cart';
import Item from './components/Item/Item';

//type
export type CartItemType = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  amount: number;
  image: string;
};

const getProducts = async (): Promise<CartItemType[]> => {
  return await (
    await fetch('https://fakestoreapi.com/products')
  ).json();
};

const App = () => {
  const { data, error, isLoading } = useQuery<
    CartItemType[]
  >('products', getProducts);

  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(
    [] as CartItemType[]
  );
  console.log('cart item', cartItems);

  const handleAddToCart = (clickItem: CartItemType) => {
    // case 1: item is already added in cart
    setCartItems((prev) => {
      const isItemInCart = prev.find(
        (item) => item.id === clickItem.id
      );

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }

      //case 2: first time the item is added
      return [...prev, { ...clickItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) => {
      return prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [
            ...acc,
            { ...item, amount: item.amount - 1 },
          ];
        } else {
          return [...acc, item];
        }
      }, [] as CartItemType[]);
    });
  };

  const getAllItems = (items: CartItemType[]) => {
    return items.reduce(
      (total: number, item) => total + item.amount,
      0
    );
  };

  if (isLoading) return <LinearProgress />;
  if (error) return <h2>Something went wrong...</h2>;

  console.log('cart', cartItems);

  return (
    <Wrapper className="App">
      <Drawer
        anchor="right"
        open={cartOpen}
        onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>

      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge
          badgeContent={getAllItems(cartItems)}
          color="error">
          <ShoppingCart />
        </Badge>
      </StyledButton>

      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item
              item={item}
              handleAddToCart={handleAddToCart}
            />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
