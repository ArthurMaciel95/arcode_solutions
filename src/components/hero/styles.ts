import styled from "styled-components";

export const Container = styled.section`
  background-image: linear-gradient(
    to right,
    var(--primary-color),
    var(--secondary-color)
  );
  height: 505px;
  width: 100%;

  .title {
    color: var(--white-color);
    margin: 0 auto;
    max-width: 80%;
    padding: 80px 0 40px 0px;
    h1 {
      width: 600px;
      font-weight: 600;
      font-size: 3rem;
    }
    p {
      font-size: 22px;
      width: 600px;
      margin: 22px 0px;
      color: var(--font-white-ligth-color);
    }
  }

  .arrow-down {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    img {
      position: relative;
      animation: bounce 0.3s ease 0s infinite alternate;
    }
  }

  @keyframes bounce {
    0% {
      top: 0px;
    }
    100% {
      top: 10px;
    }
  }

  @media screen and (max-width: 1150px) {
  }
  @media screen and (max-width: 720px) {
  }
  @media screen and (max-width: 540px) {
    .title {
      max-width: 95%;
      h1 {
        font-size: 2rem;
        text-align: center;
        width: auto;
      }
      p {
        width: auto;
        font-size: 1rem;
        text-align: center;
      }
    }
  }
`;
