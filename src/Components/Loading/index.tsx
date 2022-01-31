import React from "react";
import styled from "styled-components";

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  z-index: 999;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bgMain);

  > h1 {
    color: #fff;
  }
`;

const Loading: React.FC<any> = () => {
  return (
    <LoadingContainer>
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoadingContainer>
  );
};

export default Loading;
