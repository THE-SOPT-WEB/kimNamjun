import React from 'react';
import styled  from 'styled-components';

const SkeletonBlock = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 20px;
    overflow: hidden;
    position: relative;

    @keyframes loading {
    0% {
        transform: translateX(0);
    }
    50%,
    100% {
        transform: translateX(460px);
        }
    }
`;

const SkeletonBase = styled.div`
    overflow: hidden;
    position: relative;
    height:20px;
    background-color: #ccc;

    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        height: 100%;
        background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
        animation: loading 2s infinite linear;
    }
`

const SkeletonIcon = styled(SkeletonBase)`
    width: 64px;
    height: 64px;
    border-radius: 50px;
    margin-right: 20px;
`;

const SkeletonTitleBox = styled.div`
    flex-grow: 1;
`

const SkeletonTitle = styled(SkeletonBase)`
    width: 150px;
`;

const SkeletonAdress = styled(SkeletonBase)`
    width: 80px;
    margin-top: 3px;
`

const  SkeletonContact = styled(SkeletonBase)`
    width: 110px;
`

function SkeletonItem() {
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