import styled from "styled-components";

export const Container = styled.section`
  margin: 120px auto;
  max-width: 1400px;
  position: relative;

  h2 {
    font-size: 3rem;
    margin-top: 68px;
    text-align: center;
    margin-bottom: 41px;
    background: -webkit-linear-gradient(bottom, #496ff9, #58bfff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  div {
    display: flex;
    justify-content: space-around;
  }

  .dashed-circle {
    position: absolute;
    right: 2rem;

    top: -7rem;
    width: 200px;
    height: 200px;
  }

  .dashed-circle img {
    animation: spinning 13s infinite linear;
  }

  .dashed-line {
    position: absolute;
  }

  .dashed-line img {
    width: 100vw;
  }

  @keyframes spinning {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  div .avatar {
    max-width: 300px;
    max-height: 300px;
    background: linear-gradient(
        to right,
        var(--primary-color),
        var(--secondary-color)
      )
      border-box;
    border-radius: 50em;
    border: 12px solid transparent;
  }

  div .about-description {
    max-width: 400px;
  }

  .dots {
    height: fit-content;
    position: absolute;
    bottom: -5rem;
    left: -9rem;
  }
  div .about-description h4 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 28px;
    color: var(--font-black-color);
  }
  div .about-description p {
    color: var(--font-gray-color);
    font-weight: 400;
    font-size: 22px;
    margin-bottom: 28px;
  }

  @media screen and (max-width: 1150px) {
    div {
      flex-direction: column;
      align-items: center;
      margin: auto 10px;
    }
    .dashed-circle img {
      width: 150px;
      height: 150px;
    }
  }

  @media screen and (max-width: 720px) {
    max-width: 95vw;

    .dashed-circle {
      display: none;
    }
    .dashed-line {
      display: none;
    }
  }

  @media screen and (max-width: 540px) {
    max-width: 95vw;
    div img {
      z-index: 200;
    }

    h2 {
      font-size: 2.5rem;
    }
    .dots {
      top: 60px;
      left: 190px;
      z-index: 100;
    }
  }
`;
