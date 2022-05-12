import React from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.div`
  padding: 32px 32px 24px 32px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .tip {
    margin-top: 4px;
    color: #868e96;
    font-size: 19px;
  }
`;

function Header() {
  return (
    <HeaderBlock>
      <h1>집나간 맥주를 찾아주세요. </h1>
      <div className="tip">클릭하면 자세한 정보를 확인할 수 있어요.</div>
    </HeaderBlock>
  );
}

export default Header;