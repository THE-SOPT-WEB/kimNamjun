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
  margin-right: 20px;
  background-color: #ccc;
`;

const Title = styled.div`

`;

const Adress = styled.div`

`

const  Contact = styled.div`
  flex: 1;
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