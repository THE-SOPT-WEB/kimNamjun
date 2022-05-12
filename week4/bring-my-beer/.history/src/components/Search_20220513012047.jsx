import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';



const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.125s all ease-in;

`; 

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding: 32px 32px 72px 32px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const Check = styled.div`
  z-index: 1;
  position: absolute;
  bottom: 0;
  right:;
  font-size:15px;
`

function Search() {

  return (
    <>
        <InsertFormPositioner>
          <InsertForm>
            <Input autoFocus placeholder="검색할 지역을 입력해주세요(도로명 주소)" />
          </InsertForm>
        </InsertFormPositioner>
      <CircleButton>
        <FaSearch/>
      </CircleButton>
      <Check>
        <p>gkdl</p>
      </Check>
    </>
  );
}

export default Search;