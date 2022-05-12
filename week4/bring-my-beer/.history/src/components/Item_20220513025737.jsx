import React from 'react';
import styled  from 'styled-components';
import { BiBeer } from 'react-icons/bi';

const ItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0 12px 0;
  border-radius:10px;
  transition: 0.25s all ease-in;
  &:hover{
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.5);
  }
`;

const Icon = styled.div`
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
  font-size: 16px;
  color: #94979b;
`

const  Contact = styled.div`
  font-size: 16px;
  color: #94979b;
`

function Item({ title,adress,contact }) {
  return (
    <ItemBlock>
      <Icon >
        <BiBeer />
      </Icon>
      <Title >{title}
        <Adress>{adress}</Adress>
      </Title>
      <Contact>{contact}</Contact>
    </ItemBlock>
  );
}

export default Item;