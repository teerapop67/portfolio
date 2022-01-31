import styled from "styled-components";

export const FrameTop = styled.div`
  position: fixed;
  width: 100%;
  background-color: var(--bgBack);
  top: 0;
  height: 8rem;
`;

export const FrameBottom = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: var(--bgBack);
  height: 8rem;
`;

export const FrameLeft = styled.div`
  position: fixed;
  width: 8rem;
  left: 0;
  background-color: var(--bgBack);
  height: 100%;
`;

export const FrameRight = styled.div`
  position: fixed;
  width: 8rem;
  right: 0;
  background-color: var(--bgBack);
  height: 100%;
`;
