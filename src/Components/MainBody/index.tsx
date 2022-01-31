import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import useLocalStorage from "use-local-storage";
import Footer from "../Footer";
import NavMenu from "../NavMenu";
import Tooltip from "../Tooltip";
import {
  FrameBottom,
  FrameLeft,
  FrameRight,
  FrameTop,
} from "../../Layout/line";

const Container = styled.div`
  position: relative
  width: 100%;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  margin: 6rem 15rem;
  border-radius: 18px;
  overflow: hidden;
  height: 670px;
  padding: 5rem 8rem;
  background: var(--bgMain);
  border: 12px solid var(--white) inset;
  position: relative;
  box-shadow: inset 2px 2px 10px var(--shadow);

  @media only screen and (max-width: 1480px) {
    margin: 2rem;
    padding: 5rem 3rem;
  }

  @media only screen and (max-width: 850px) {
    height: auto;
  }

  @media only screen and (max-width: 350px) {
    margin: 12px;
    padding: 5rem 15px;
  }
`;

const Circle = styled.div<{ right: string }>`
  position: absolute;
  right: ${({ right }) => right};
  top: 30px;
  font-size: 30px;
  color: var(--white);
  border-radius: 50%;
  cursor: pointer;
`;

interface Props {
  notMain?: boolean;
}

const MainBody: React.FC<Props> = ({ children, notMain }) => {
  const { i18n } = useTranslation();
  const [isTooltip, setIsTooltip] = useState(false);
  const [lang, setLang] = useState("EN");
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const themeControl = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const changeLang = () => {
    if (lang === "EN") {
      i18n.changeLanguage("th");
      setLang("TH");
    } else {
      i18n.changeLanguage("en");
      setLang("EN");
    }
  };

  return (
    <>
      <Container data-theme={theme}>
        <FrameTop />
        <FrameLeft />
        <FrameRight />
        <FrameBottom />
        {notMain && <NavMenu />}
        <Wrapper>
          <Circle right="30px" onClick={themeControl}>
            <i className="fas fa-sun"></i>
          </Circle>
          <Circle
            onClick={changeLang}
            right="85px"
            onMouseLeave={() => setIsTooltip(false)}
            onMouseEnter={() => setIsTooltip(true)}
          >
            <i className="fas fa-globe-americas"></i>
          </Circle>
          {isTooltip && (
            <Tooltip top="70px" right="45px">
              {lang}
            </Tooltip>
          )}

          {children}
          <Footer />
        </Wrapper>
      </Container>
    </>
  );
};

export default MainBody;
