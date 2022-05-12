import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { MdDone } from 'react-icons/md';

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

const CheckBox = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  position: absolute;
  left: 85%;
  bottom: 30px;
  transform: translate(-50%, 50%);
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.125s all ease-in;

`

function Search() {

  return (
    <>
        <InsertFormPositioner>
          <InsertForm>
            <Input autoFocus placeholder="검색할 지역을 입력해주세요(도로명 주소)" disabled='' />
          </InsertForm>
        </InsertFormPositioner>
      <CircleButton>
        <FaSearch/>
      </CircleButton>
      <CheckBox>
        <p> 내위치 기준 검색 </p>
        <MdDone/>
      </CheckBox>

    </>
  );
}

export default Search;