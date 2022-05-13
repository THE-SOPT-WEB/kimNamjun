import React from 'react';
import styled  from 'styled-components';

const ItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
`;

const Icon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50px;
  border: 1px solid #ced4da;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  background-color: #ccc;
  color: #fff;
`;

const Title = styled.div`
  width: 80px;
  height:20px;
  background-color: #ccc;
`;

const Adress = styled.div`
  width: 100px;
  height:20px;
  background-color: #ccc;
`

const  Contact = styled.div`
  width: 100px;
  height:20px;
  background-color: #ccc;
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