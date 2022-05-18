import React from 'react';
import styled  from 'styled-components';
import { useLocationState,useUsersDispatch, getLocation, getNearbybeers, } from './Context';
import { BiBeer } from 'react-icons/bi';

const ItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  border-radius:10px;
  transition: 0.25s all ease-in;
  cursor: pointer;
  &:hover{
    transform: scale(1.05);
  }
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
  background-color: #38d9a9;
  color: #fff;
`;

const Title = styled.div`
  flex: 1;
  font-size: 19px;
  color: #495057;
`;

const Adress = styled.div`
  font-size: 15px;
  color: #94979b;
`

const  Contact = styled.div`
  font-size: 15px;
  color: #94979b;
`

function Item({ title,adress,contact }) {

    const state = useLocationsState();
    const dispatch = useUsersDispatch();

    const { data: locations, loading, error } = state.locations;
  return (
    <ItemBlock>
      <Icon >
        <BiBeer />
      </Icon>
      <Title >{locations.place_name}
        <Adress>{locations.road_address_name}</Adress>
      </Title>
      <Contact>{locations.phone}</Contact>
    </ItemBlock>
  );
}

export default React.memo(Item);
