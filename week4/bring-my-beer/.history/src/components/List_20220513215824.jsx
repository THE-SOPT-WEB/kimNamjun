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
  const state = useLocationState();

  const { data: locations, loading, error } = state.locations;
  if (loading) return <SkeletonItem/>;
  if (error) return <>에러임~</>;

  return (
    <ListBlock>
      {locations && locations.map( location => (
          <Item
            key={location.id}
            id={location.id}
            title={location.place_name}
            adress={location.road_address_name}
            contact={location.phone}
          />
      ))}
    </ListBlock>
  );
}

export default List;