import styled from "styled-components";

export const ContainerMain = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 1480px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    grid-gap: 15px;
    margin-top: 1rem;
  }
`;

export const WrapperUse = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px 0;
  display: grid;
  grid-template-rows: auto auto 1fr;
`;

export const Box3Info = styled.div<{ frGrid?: boolean }>`
  display: grid;
  gap: 60px;
  grid-template-columns: ${({ frGrid }) =>
    frGrid ? "1fr 1fr 1fr" : "auto auto auto"};

  @media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

export const UpZone = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
  margin-bottom: 1.5rem;
`;

export const DownZone = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
