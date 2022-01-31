import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div<{ isMobile: boolean }>`
  position: absolute;
  display: flex;
  left: 16rem;
  top: 10rem;
  z-index: 10;

  .mobile {
    display: none;
  }

  .menu {
    width: 100%
    height: 100%;

    > span {
      font-size: var(--fontTxt);
      color: ${({ isMobile }) => (isMobile ? "#fff" : "var(--white)")};
      margin-left: 25px;
      cursor: pointer;
      
      :hover {
        color: var(--green);
      }
    
    }
  }

  @media only screen and (max-width: 1480px) {
    left: 2rem;
    top: 4rem;
  }



  //Nav Mobile
  @media only screen and (max-width: 550px) {
    .menu {
      background: ${({ isMobile }) => (isMobile ? "#222" : "none")};
      padding: 0 4rem 3rem 2rem;
      border-radius: 8px;
      margin-top: 3rem;
      transition: all 0.2s ease-in-out;

    }
    .menu > span {
      display: ${({ isMobile }) => (isMobile ? "flex" : "none")};
      margin-top: 3rem;
      justify-content: center;
      :hover {
        color: var(--green);
      }
      
    }

    .mobile {
      display: block;
      position: absolute;
      left: 2rem;
      top: 0;
      cursor: pointer;
      font-size: 30px;
      color: var(--white);
    }
  }
`;

const NavMenu: React.FC<any> = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <Container isMobile={isMobile}>
      <div className="mobile" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </div>
      <div className="menu">
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/aboutme">About</Link>
        </span>
        <span>
          <Link to="/resume">Resume</Link>
        </span>

        <span>
          <Link to="/portfolio">Portfolio</Link>
        </span>
      </div>
    </Container>
  );
};

export default NavMenu;
