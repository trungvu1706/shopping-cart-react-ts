import styled from 'styled-components';

export const ItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 20px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  & > img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  & > div {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
    padding: 1rem;
    height: 100%;
  }

  & > button {
    border-radius: 0 0 20px 20px;
    width: 100%;
  }
`;
