import React, {useState, useRef, useEffect } from 'react';
import { flushSync } from "react-dom";
import { createGlobalStyle } from 'styled-components';
import Template from './components/Template';
import Header from './components/Header';
import List from './components/List';
import Item from './components/Item';
import Search from './components/Search';
import SkeletonItem from './components/SkeletonItem';
import axios from "axios";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {

  const [beerStores, setBeerStores] = useState([]); //가게 정보 배열
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useRef("");

  useEffect(() => {
    setBeerStores([]); //가게 정보 담은 배열 초기화
  }, []);

  useEffect(() => {
    if (isChecked) {
      location.current.value = "";
    }
  }, [isChecked]);

  function handleSearchButton() {
    flushSync(() => setIsLoading(true));
    if (!isChecked) {
      //입력 지역 근처 검색
      getDataNearByTown(location.current.value);
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
    flushSync(() => setBeerStores(data.documents));
    setIsLoading(false);
  }

  async function getDataNearByTown(location) {
    if (location) {
      const { x, y } = await getLocationCoords(location);

      const { data } = await axios.get(
        "https://dapi.kakao.com//v2/local/search/keyword",
        {
          headers: {
            Authorization: `KakaoAK ${import.meta.env.VITE_APP_KAKAO_AK}`,
          },
          params: {
            query: `${location} 맥주`,
            x: x,
            y: y,
            radius: 1000,
          },
        }
      );
      data.documents.sort((a, b) => a.distance - b.distance); //거리순 정렬
      flushSync(() => setBeerStores(data.documents));
      setIsLoading(false);
    }
  }

  async function getLocationCoords(location) {
    //사용자가 입력한 지역 좌표얻기
    let coords = {};
    const { data } = await axios.get(
      "https://dapi.kakao.com//v2/local/search/keyword",
      {
        headers: {
          Authorization: `KakaoAK ${import.meta.env.VITE_APP_KAKAO_AK}`,
        },
        params: {
          query: location,
        },
      }
    );
    coords = data.documents[0];
    return coords;
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
    return { x: 37.5426165, y: 126.962994 };
  };
  return (
    <>
      <GlobalStyle />
      <Template>
        <Header />
        <List />
        <Search />
      </Template>
    </>
  );
}

export default App;