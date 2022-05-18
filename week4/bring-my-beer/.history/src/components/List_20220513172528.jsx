import React from 'react';
import styled from 'styled-components';
import { useLocationState } from './Context';
import Item from './Item';
import SkeletonItem from './SkeletonItem';

const ListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function List() {
  const todos = useLocationState();
  console.log(todos);

  return (
    <ListBlock>
      <SkeletonItem/>
      <Item title="봉구비어 보라매점" adress='당곡 6길 65' contact='010-4580-7180'/>
    </ListBlock>
  );
}

export default List;