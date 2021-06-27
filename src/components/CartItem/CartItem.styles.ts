import styled from 'styled-components';

export const CartItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;

  div {
    flex: 1;
  }

  .information,
  .button {
    display: flex;
    justify-content: space-between;
  }

  img {
    max-width: 300px;
    object-fit: cover;
    margin-left: 40px;
  }
`;
