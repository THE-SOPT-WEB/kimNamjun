import React from 'react';
import axios from "axios";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import styled from 'styled-components';
import Item from './Item';

const ListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function List() {
  return (
    <ListBlock>
      <Item title="역전할머니 맥주 신림점" adress='당곡 6길 65' contact='010-4580-7180'/>
    </ListBlock>
  );
}

export default List;