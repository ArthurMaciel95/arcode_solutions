import styled from "styled-components";

export const Container = styled.section`
  background-image: linear-gradient(
    to right,
    var(--primary-color),
    var(--secondary-color)
  );
  height: 505px;
  width: 100%;
  position: relative;

  .hero {
    display: flex;
    justify-content: center;
    max-width: 80%;
    margin: 0 auto;
  }

  .hero .title {
    color: var(--white-color);

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
    position: absolute;
    right: 50%;
    bottom: 40px;
    img {
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
    .hero_image {
      display: none;
    }
  }
  @media screen and (max-width: 720px) {
  }
  @media screen and (max-width: 540px) {
    .hero .title {
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
