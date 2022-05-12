import React from 'react';
import styled, { css } from 'styled-components';
import { FiMousePointer } from 'react-icons/fi';
import { FaBeer } from 'react-icons/fa';

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const ItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50px;
  border: 1px solid #ced4da;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  border: 1px solid #38d9a9;
  color: #38d9a9;
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

function Item({ id, done, text }) {
  return (
    <ItemBlock>
      <CheckCircle done={done}>{done && <FaBeer />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove>
        <FiMousePointer />
      </Remove>
    </ItemBlock>
  );
}

export default Item;