import React from "react";
import styled from "styled-components";

const Container = styled.span<{
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}>`
  position: absolute;
  padding: 8px 12px;
  font-weight: bold;
  color: var(--black);
  background: var(--white);
  border-radius: 5px;
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};
  left: ${({ left }) => left};
`;

interface PropsTooltip {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

const Tooltip: React.FC<PropsTooltip> = (props) => {
  return (
    <Container
      top={props.top}
      right={props.right}
      bottom={props.bottom}
      left={props.left}
    >
      {props.children}
    </Container>
  );
};

export default Tooltip;
