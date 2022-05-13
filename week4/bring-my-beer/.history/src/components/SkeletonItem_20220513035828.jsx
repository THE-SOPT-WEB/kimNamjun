import React from 'react';
import styled  from 'styled-components';





const SkeletonBlock = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 20px;

    @keyframes loading {
    0% {
        transform: translateX(0);
    }
    50%,
    100% {
        transform: translateX(500px);
        }
    }

    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        height: 10%;
        background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
        animation: loading 2s infinite linear;
    }
`;

const SkeletonIcon = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 50px;
    margin-right: 20px;
    background-color: #ccc;
`;

const SkeletonTitleBox = styled.div`
    flex-grow: 1;
`

const SkeletonTitle = styled.div`
    width: 150px;
    height:20px;
    background-color: #ccc;
`;

const SkeletonAdress = styled.div`
    width: 80px;
    margin-top: 3px;
    height:20px;
    background-color: #ccc;
`

const  SkeletonContact = styled.div`
    width: 110px;
    height:20px;
    background-color: #ccc;
`

function SkeletonItem({ title,adress,contact }) {
    return (
    <SkeletonBlock>
        <SkeletonIcon/>
    <SkeletonTitleBox>
        <SkeletonTitle/>
        <SkeletonAdress/>
    </SkeletonTitleBox>
    <SkeletonContact/>
    </SkeletonBlock>
    );
}

export default SkeletonItem;