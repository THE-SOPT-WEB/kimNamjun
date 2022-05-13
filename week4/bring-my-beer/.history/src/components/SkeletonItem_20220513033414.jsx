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

const Flex = styled.div`
    flex-grow: 5;
`

const Title = styled.div`
  width: 100px;
  height:20px;
  background-color: #ccc;
`;

const Adress = styled.div`
  width: 10px;
  height:20px;
  background-color: #ccc;
`

const  Contact = styled.div`
  width: 120px;
  height:20px;
  background-color: #ccc;
`

function SkeletonItem({ title,adress,contact }) {
  return (
    <ItemBlock>
      <Icon/>
      <Flex>
        <Title/>
        <Adress/>
      </Flex>
      <Contact/>
    </ItemBlock>
  );
}

export default SkeletonItem;