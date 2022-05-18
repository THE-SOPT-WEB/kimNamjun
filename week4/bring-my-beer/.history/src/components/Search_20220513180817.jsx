import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { MdDone } from 'react-icons/md';
import { useLocationDispatch, useLocationNextId } from './Context';

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
  font-size: 14px;
  position: absolute;
  right: 20px;
  bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.125s all ease-in;
  color: #495057;
`

const SmallCheckButton = styled.div`
  &:hover {
    border: 1px solid #38d9a9;
    color:#38d9a9;
  }
  &:active {
    border: 1px solid #20c997;;
    color:#20c997;;
  }

  cursor: pointer;
  width: 30px;
  height: 30px;
  font-size: 50px;
  color: #495057;
  border: 1px solid #495057;
  border-radius: 50%;
  margin-left: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${props =>
    props.checked &&
    css`
      border: 1px solid #38d9a9;
      color:#38d9a9;
    `}
`

function Search() {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState('');
  const Check = () => setChecked(!checked);

  const dispatch = useLocationDispatch();
  const nextId = useLocationNextId();

  const onSubmit = e => {
    e.preventDefault();
    dispatch({ 
      type:"SEARCH",
      location: {
        id : nextId.current,
        title: value,
        adress: '당곡 6길 65',
        contact : '010-4580-7180'
      }
    });
    setValue('');
    nextId.current += 1;
  }

  return (
    <>
        <InsertFormPositioner>
          <InsertForm>
            <Input autoFocus placeholder="검색할 지역을 입력해주세요(ex.홍대, 왕십리, 신림)" disabled={checked ? true : false } />
          </InsertForm>
        </InsertFormPositioner>
      <CircleButton onClick={onSubmit}>
        <FaSearch/>
      </CircleButton>
      <CheckBox>
        <p> 내위치 기준 검색</p>
        <SmallCheckButton onClick={Check} checked={ checked ? true : false }>
          <MdDone/>
        </SmallCheckButton>
      </CheckBox>

    </>
  );
}

export default Search;