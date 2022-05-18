import { useState, useEffect, useRef } from "react";
import styled, {css} from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { MdDone } from 'react-icons/md';
import axios from "axios";

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


  const [beerStores, setBeerStores] = useState([]); //가게 정보 배열
  const [checked, setChecked] = useState(false);
  const onToggle = () => setChecked(!checked);
  const location = useRef("");

  useEffect(() => {
    setBeerStores([]); //가게 정보 담은 배열 초기화
  }, []);

  useEffect(() => {
    if (checked) {
      location.current.value = "";
    }
  }, [checked]);

  function handleSearchButton() {
    if (!checked) {
      //입력 지역 근처 검색
    } else {
      //사용자 현 위치 검색
      getDataNearByUser();
    }
  }

  async function getDataNearByUser() {
    const { x, y } = await getLocation();

    const { data } = await axios.get(
      "https://dapi.kakao.com//v2/local/search/keyword",
      {
        headers: {
          Authorization: `KakaoAK ${import.meta.env.VITE_APP_KAKAO_AK}`,
        },
        params: {
          query: "맥주",
          x: x,
          y: y,
          radius: 1000,
        },
      }
    );
    data.documents.sort((a, b) => a.distance - b.distance);
  }

  const getLocation = (errHandler) => {
    if ("geolocation" in navigator) {
      return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const {
              coords: { latitude: y, longitude: x },
            } = position;
            resolve({ x, y });
          },
          (e) => {
            alert("HTTPS 연결을 확인해주세요.");
            errHandler && errHandler();
          }
        );
      });
    }
    return { x: 37.49294625, y: 126.93079001 };
  };

  return (
    <>
        <InsertFormPositioner>
          <InsertForm>
            <Input autoFocus placeholder="검색할 지역을 입력해주세요(ex.홍대, 왕십리, 신림)" disabled={checked ? true : false } />
          </InsertForm>
        </InsertFormPositioner>
      <CircleButton>
        <FaSearch/>
      </CircleButton>
      <CheckBox>
        <p> 내위치 기준 검색</p>
        <SmallCheckButton onClick={onToggle} checked={ checked ? true : false }>
          <MdDone/>
        </SmallCheckButton>
      </CheckBox>

    </>
  );
}

export default Search;