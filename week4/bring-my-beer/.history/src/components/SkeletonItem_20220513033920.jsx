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

const TitleBox = styled.div`
    flex-grow: 1;
`

const Title = styled.div`
    width: 150px;
    height:20px;
    background-color: #ccc;
`;

const Adress = styled.div`
    width: 80px;
    margin-top: 3px;
    height:20px;
    background-color: #ccc;
`

const  Contact = styled.div`
    width: 110px;
    height:20px;
    background-color: #ccc;
`

function SkeletonItem({ title,adress,contact }) {
    return (
    <ItemBlock>
        <Icon/>
    <TitleBox>
        <Title/>
        <Adress/>
    </TitleBox>
    <Contact/>
    </ItemBlock>
    );
}

export default SkeletonItem;