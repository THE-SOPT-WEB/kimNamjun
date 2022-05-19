import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Button from './components/Button';
import List from './components/List';
import Info from './components/Info';
import Template from './components/Template';
import { createGlobalStyle } from 'styled-components';



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
}

function App() {
  const [checked, setChecked] = useState(false);
  const [placeList, setPlaceList] = useState([]);
  const inputRef = useRef(null);

  const GlobalStyle = createGlobalStyle`
  #root, body, html {
    padding: 0;
    margin: 0;
  }
  * {
    box-sizing: border-box;
	}
  
`;


  async function getMyLocation(){
    const result = await getLocation();
    return result;
  };

  // 내 근처 가게 가져오기
  async function getPlaceNearby(x,y){
    const result = await axios.get(
      "https://dapi.kakao.com/v2/local/search/keyword",
      {
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_AK}`,
        },
        params: {
          x: x,
          y: y,
          radius: 1000,
          query: '맥주',
        }
      }
    )
    const places = result.data.documents;
    let placeInfo = [];
    let id = 1;
    places.map((place) => {
      const data = {
        id: id++,
        name: place.place_name,
        phone: place.phone || "정보 없음",
        address: place.distance + "미터",
        url: place.place_url,
      };
      placeInfo = [...placeInfo, data];
    })
    setPlaceList(placeInfo);
  };

  //검색해서 가져오기
  async function getPlaceLocation(location){
    const result = await axios.get(
      "https://dapi.kakao.com/v2/local/search/keyword",
      {
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_AK}`,
        },
        params: {
          query: location + " " + '맥주',
        }
      }
    )
    const places = result.data.documents;
    let placeInfo = [];
    let id = 1;
    places.map((place) => {
      const data = {
        id: id++,
        name: place.place_name,
        phone: place.phone || "정보 없음",
        address: place.address_name,
        url: place.place_url,
      };
      placeInfo = [...placeInfo, data];
    })
    setPlaceList(placeInfo);
  };

  const getPlaceList = async() =>{
    try{
      if(checked){
        const location = await getMyLocation();
        getPlaceNearby(location.x,location.y);
      }
      else{
        getPlaceLocation(inputRef.current.value);
      }
    } catch(error){
      console.log(error);
    } 
  }
  
  const showPlaceList = () =>{

    if(placeList.length===0){
      return(
        <h3>결과가 없습니다. </h3>
      )
    }
    return placeList.map(({id, name, phone, address, url})=>(
      <List key={id}>
        <Info onClick={()=>clickNameHandler(url)} >{name}</Info>
            <div>
              <Info>{phone}</Info>
              <Info>{address}</Info>
            </div>
      </List>
    ))
  }

  const clickNameHandler = (url) =>{
    window.open(url,'modal','width=300px,height=600px,location=no,status=no,scrollbars=no');
  }

  const checkHandler = ({checked}) =>{
    setChecked(!checked);
  }



  return (
    <>
        <Template>
          <h1>맥주집 찾기 - 검색어를 입력하세요</h1>
          <form >
            <input type="checkbox" checked={checked} onChange={()=>checkHandler({checked})}></input>
          </form>
          <form>
            <h2>우리집주변 맥주집 찾으려면 체크하삼요</h2>
            {checked ? <input type="text" placeholder='지역을 검색해주세요' disabled></input> 
            : <input ref={inputRef} type="text" placeholder='지역을 검색해주세요'></input>}
          </form>
          <Button onClick={()=>{getPlaceList()}}>검색하기</Button>
          <ul>
            {showPlaceList()}
          </ul>
        </Template>
    </>
  
  );
}

export default App;