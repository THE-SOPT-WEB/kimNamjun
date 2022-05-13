import React from 'react';
import styled  from 'styled-components';
import { BiBeer } from 'react-icons/bi';

const ItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  border-radius:10px;
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
  background-color: #827a7a;
  color: #fff;
`;

const Title = styled.div`
  flex: 1;
  font-size: 19px;
  color: #495057;
`;

const Adress = styled.div`
  font-size: 15px;
  color: #94979b;
`

const  Contact = styled.div`
  font-size: 15px;
  color: #94979b;
`

function SkeletonItem({ title,adress,contact }) {
  return (
    <ItemBlock>
      <Icon/>
      <Title>
        <Adress/>
      </Title>
      <Contact/>
    </ItemBlock>
  );
}

export default SkeletonItem;