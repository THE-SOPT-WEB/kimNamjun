import React from 'react';
import styled, { css } from 'styled-components';
import { FiMousePointer } from 'react-icons/fi';
import { BiBeer } from 'react-icons/bi';

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
`;

const ItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const CheckCircle = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50px;
  border: 1px solid #ced4da;
  font-size: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  background-color: #38d9a9;
  color: #fff;
`;

const Title = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
`;

const Adress = styled.div`
  font-size: 21px;
  color: #495057;
`

function Item({ id, done, title }) {
  return (
    <ItemBlock>
      <CheckCircle done={done}>{done && <BiBeer />}
      </CheckCircle>
      <Title done={done}>{title}
      <Adress>하이</Adress>
      </Title>
      <Remove>
        <FiMousePointer />
      </Remove>
    </ItemBlock>
  );
}

export default Item;