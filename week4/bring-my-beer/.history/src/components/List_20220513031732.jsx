import React from 'react';
import axios from "axios";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import styled from 'styled-components';
import Item from './Item';
import SkeletonItem from './SkeletonItem';

const ListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function List() {
  return (
    <ListBlock>
      <SkeletonItem/>
    </ListBlock>
  );
}

export default List;