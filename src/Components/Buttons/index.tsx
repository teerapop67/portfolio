import styled from "styled-components";

export const ButtonMenu = styled.div`
  width: 175px;
  padding: 15px 0;
  cursor: pointer;
  text-align: center;
  margin: 15px 0;
  border: 1px solid var(--white);
  border-radius: 8px;
  background-color: transparent;
  font-size: var(--fontSubHeader);
  color: var(--white);
  transition: all 0.3s ease;

  :hover {
    background-color: var(--green);
  }
`;

export const ButtonYear = styled.div`
  padding: 8px 15px;
  width: 95px;
  text-align: center;
  color: var(--green);
  font-size: var(--fontSubHeader);
  border-radius: 12px;
  background: var(--bgMain);
  border: 1px solid var(--white);
`;
