import React from 'react';
import styled from 'styled-components';
import { useLocationState,useUsersDispatch, getLocation, getNearbybeers, } from './Context';
import Item from './Item';
import SkeletonItem from './SkeletonItem';

const ListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function List() {
  const Locations = useLocationState();

  const { data: location, loading, error } = Locations.location;
  if (loading) return <SkeletonItem/>;

  return (
    <ListBlock>
      { Locations.map( location => (
          <Item
            key={location.id}
            id={location.id}
            title={location.title}
            adress={location.adress}
            contact={location.contact}
          />
      ))} 
    </ListBlock>
  );
}

export default List;