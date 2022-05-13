import React from 'react';
import styled  from 'styled-components';

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
  background-color: #ccc;
  color: #fff;
`;

const Title = styled.div`
  flex: 1;
  font-size: 19px;
  color: #ccc;
`;

const Adress = styled.div`
  width: 50px;
  height:50px;
  font-size: 15px;
  color: #ccc;
`

const  Contact = styled.div`
  font-size: 15px;
  color: #ccc;
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