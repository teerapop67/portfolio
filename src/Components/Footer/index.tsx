import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  padding: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--subTxt);

  @media only screen and (max-width: 1250px) {
    flex-direction: column-reverse;
  }

  > p {
    font-size: var(--fontTxt);
  }

  .Icon-social {
    display: flex;
    > a {
      margin-right: 18px;
      font-size: 25px;
      cursor: pointer;
      color: var(--subTxt);
      transition: all 0.3s ease-in-out;

      :hover {
        color: var(--green);
      }
    }
  }
`;

const Footer: React.FC<any> = () => {
  return (
    <Container>
      <Wrapper>
        <p>&copy; 2021 Teerapop. All right reversed </p>{" "}
        <div className="Icon-social">
          <a
            href="https://www.facebook.com/benz.acdemy/"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://github.com/teerapop67"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://twitter.com/benzztj"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/benzztj/"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Footer;
