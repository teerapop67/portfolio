import React from "react";
import MainBody from "../Components/MainBody";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Box3Info, WrapperUse } from "../Layout";
import { SubTopic, Texts, Topic } from "../Layout/textUse";
import { UpZone } from "../Layout";
import { ButtonYear } from "../Components/Buttons";

const WrapperSubHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  .btn-year {
    display: flex;
    align-items: center;
    color: var(--white);
    gap: 10px;
  }
`;

const Box2Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
`;

const TopicWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;

  @media only screen and (max-width: 500px) {
    display: flex;
    flex-direction: column-reverse;
    grid-gap: 15px;
  }
`;

const BtnResume = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 0 15px;
  cursor: pointer;
  color: var(--green);
  background: var(--bgMain);
  border: 1px solid var(--white);
  border-radius: 12px;
  font-weight: medium;
  transition: all 0.3s ease;

  :hover {
    color: #000;
    opacity: 0.8;
    background: var(--green);
  }
`;

const Resume: React.FC<any> = () => {
  const { t } = useTranslation();
  document.title = "Teerapop - Resume";

  return (
    <MainBody notMain={true}>
      <WrapperUse>
        <TopicWrapper>
          <Topic>{t("resume-header")}</Topic>
          <BtnResume
            href="/docs/Resume.pdf"
            rel="noreferrer"
            title="Resume"
            target="_blank"
          >
            Download resume
          </BtnResume>
        </TopicWrapper>

        <UpZone width="100%">
          <SubTopic>
            PS C:\Users\user{">"}Experience{">"}
          </SubTopic>

          <Box3Info frGrid={true}>
            <WrapperSubHeader>
              <ButtonYear>{t("raniron-year")}</ButtonYear>
              <SubTopic green={true}>RANIRON</SubTopic>
              <Texts>{t("raniron-info")}</Texts>
            </WrapperSubHeader>
            <WrapperSubHeader>
              <ButtonYear>{t("raniron-year")}</ButtonYear>
              <SubTopic green={true}>The Rich</SubTopic>
              <Texts> {t("the-rich-info")}</Texts>
            </WrapperSubHeader>
            <WrapperSubHeader>
              <ButtonYear>{t("raniron-year")}</ButtonYear>
              <SubTopic green={true}>AADS</SubTopic>
              <Texts style={{ textAlign: "center" }}>
                {t("bumit-info")}
                <br /> {t("bumit-info-2")}
              </Texts>
            </WrapperSubHeader>
          </Box3Info>
        </UpZone>

        {/* use the same element DownZone */}
        <UpZone width="100%">
          <SubTopic>
            PS C:\Users\user{">"}Experience{">"}
          </SubTopic>
          <Box2Info>
            <WrapperSubHeader>
              <span className="btn-year">
                <ButtonYear>{t("rwb-year-start")}</ButtonYear> -{" "}
                <ButtonYear>{t("rwb-year-end")}</ButtonYear>
              </span>

              <SubTopic green={true}>Ratwinit Bangkaow school</SubTopic>
              <Texts> {t("rwb-info")}</Texts>
            </WrapperSubHeader>
            <WrapperSubHeader>
              <span className="btn-year">
                <ButtonYear>{t("bkk-year-start")}</ButtonYear> -{" "}
                <ButtonYear>{t("bkk-year-end")}</ButtonYear>
              </span>{" "}
              <SubTopic green={true}>Bangkok University</SubTopic>
              <Texts style={{ textAlign: "center" }}>
                {t("bkk-info")}
                <br /> {t("bkk-info-2")}
              </Texts>
            </WrapperSubHeader>
          </Box2Info>
        </UpZone>
      </WrapperUse>
    </MainBody>
  );
};

export default Resume;
