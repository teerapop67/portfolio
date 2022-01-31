import React from "react";
import MainBody from "../Components/MainBody";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Box3Info, DownZone, UpZone, WrapperUse } from "../Layout";
import { SubTopic, Texts, Topic } from "../Layout/textUse";
import { skillFrontend, skillBackend, skillUxUi } from "../data/skills";

const WrapInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  grid-gap: 15px;

  .lang-front {
    display: grid;
    grid-template-columns: auto auto;
    justify-items: right;
    text-align: left;
  }

  .lang-back {
    display: flex;
    justify-content: center;
  }

  > span > p {
    color: var(--green);
    font-size: var(--fontSubHeader);
    margin-bottom: 5px;
    text-align: center;
  }
`;

const Aboutme: React.FC<any> = () => {
  const { t } = useTranslation();
  document.title = "Teerapop - About";

  return (
    <MainBody notMain={true}>
      <WrapperUse>
        <Topic>{t("about-header")}</Topic>
        <UpZone width="70%">
          <SubTopic> PS C:\Users\user{">"} </SubTopic>
          <Texts>{t("about")}</Texts>
        </UpZone>
        <DownZone>
          <SubTopic>
            {" "}
            PS C:\Users\user{">"}\Skills{">"}{" "}
          </SubTopic>
          <Box3Info>
            <WrapInfo>
              <span>
                <p>
                  <i className="fab fa-foursquare"></i>
                </p>
                <SubTopic green={true}> Front-end </SubTopic>
              </span>
              <div className="lang-front">
                <span>
                  {skillFrontend.slice(0, 5).map((evt) => (
                    <Texts key={evt.lang}>&bull; {evt.lang}</Texts>
                  ))}
                </span>
                <span>
                  {skillFrontend.slice(5).map((evt) => (
                    <Texts key={evt.lang}>&bull; {evt.lang}</Texts>
                  ))}
                </span>
              </div>
            </WrapInfo>

            <WrapInfo>
              <span>
                <p>{"</>"}</p>
                <SubTopic green={true}> Back-end </SubTopic>
              </span>
              <div className="lang-back">
                <span style={{ textAlign: "left" }}>
                  {skillBackend.map((evt) => (
                    <Texts key={evt.lang}>&bull; {evt.lang}</Texts>
                  ))}
                </span>
              </div>
            </WrapInfo>

            <WrapInfo>
              <span>
                <p>
                  <i className="fas fa-ruler-horizontal"></i>
                </p>
                <SubTopic green={true}> Ux/Ui </SubTopic>
              </span>{" "}
              <div className="lang-back">
                <span style={{ textAlign: "left" }}>
                  {skillUxUi.map((evt) => (
                    <Texts key={evt.soft}>&bull; {evt.soft}</Texts>
                  ))}
                </span>
              </div>
            </WrapInfo>
          </Box3Info>
        </DownZone>
      </WrapperUse>
    </MainBody>
  );
};

export default Aboutme;
