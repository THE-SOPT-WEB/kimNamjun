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
      <Item text="역전할머니 맥주 신림점" done={true} />
      <Item text="봉구비어 신대방점" done={true} />
      <Item text="펀비어킹 보라매점" done={true} />
      <Item text="다모토리 보라매점" done={true} />
    </ListBlock>
  );
}

export default List;