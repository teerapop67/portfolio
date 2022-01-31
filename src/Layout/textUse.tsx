import styled from "styled-components";

export const Topic = styled.div`
  font-size: var(--fontHeader);
  line-height: 1.75rem;
  margin-bottom: 2rem;
  color: var(--white);
`;

export const SubTopic = styled.div<{ green?: boolean }>`
  font-size: var(--fontSubHeader);
  line-height: 1.12rem;
  color: ${({ green }) => (green ? "var(--green)" : "var(--white)")};
`;

export const Texts = styled.div`
  font-size: var(--fontTxt);
  line-height: 1.5rem;
  color: var(--subTxt);
`;
