import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { ButtonMenu } from "../Components/Buttons";
import Loading from "../Components/Loading";
import MainBody from "../Components/MainBody";
import { ContainerMain } from "../Layout";

const typing = keyframes`
  from {
    width: 0
  }
`;

const blink = keyframes`
  50% {
    border-color: transparent
  }
`;

export const WrapperLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  > span {
    width: 26.2ch;
    animation: ${typing} 2s steps(22), ${blink} 0.5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 2px solid;
    color: var(--subTxt);
    font-size: var(--fontTxt);
    margin-left: 16px;
    margin-bottom: 12px;
  }
`;

export const WrapperRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = styled.h1`
  margin: 0;
  font-size: 72px;
  color: var(--white);
  letter-spacing: 15px;
  font-weight: bold;

  @media only screen and (max-width: 950px) {
    font-size: 38px;
  }
`;

const ImgProfile = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;

  @media only screen and (max-width: 950px) {
    width: 200px;
    height: 200px;
  }
`;

const Menu = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  align-items: center;
  @media only screen and (max-width: 1480px) {
    width: 100%;
  }
`;

const Main: React.FC<any> = () => {
  const { t } = useTranslation();
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(true);
    }, 500);

    setIsLoad(false);

    document.title = "Teerapop - Home";
  }, []);

  return (
    <MainBody>
      {isLoad ? (
        <ContainerMain>
          <WrapperLeft>
            <Header>{t("header")}</Header>
            <span>I'm a front-end developer.</span>
            <Menu>
              <Link to="/aboutme">
                <ButtonMenu>About me</ButtonMenu>
              </Link>
              <Link to="/resume">
                <ButtonMenu>Resume</ButtonMenu>
              </Link>
              <Link to="/portfolio">
                <ButtonMenu>Portfolio</ButtonMenu>
              </Link>
            </Menu>
          </WrapperLeft>
          <WrapperRight>
            <ImgProfile src="./imgs/profile.jpg" alt="Profile" />
          </WrapperRight>
        </ContainerMain>
      ) : (
        <Loading />
      )}
    </MainBody>
  );
};

export default Main;
