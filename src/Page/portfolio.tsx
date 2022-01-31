import React from "react";
import MainBody from "../Components/MainBody";
// import { Trans, useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
import { ContainerMain } from "../Layout";

const Portfolio: React.FC<any> = () => {
  document.title = "Teerapop - Portfolio";

  return (
    <MainBody notMain={true}>
      <ContainerMain>
        <h1>Portfolio</h1>
        <h1>Portfolio</h1>
      </ContainerMain>
    </MainBody>
  );
};

export default Portfolio;
