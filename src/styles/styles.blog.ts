import styled from "styled-components";

export const Container = styled.main`
  width: 80vw;
  margin: 0 auto;

  background-color: var(--white-color);
  .post-image-area {
    position: relative;
    display: flex;
    height: 250px;
    width: auto;

    &::after {
      width: 100%;
      content: "";
      height: 100px;
      position: absolute;
      bottom: 0px;
      left: 0px;
      z-index: 1000;
      background: linear-gradient(180deg, transparent 0, transparent 30%, #000);
      opacity: 0.8;
    }
    &::before {
      width: 100%;
      content: "";
      height: 100px;
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: 1000;
      background: linear-gradient(360deg, transparent 0, transparent 30%, #000);
      opacity: 0.8;
    }
  }

  h1 {
    font-size: 3rem;
    font-family: "Open sans";
    margin-bottom: 50px;
  }

  .post-profile-area {
    display: flex;

    .avatar {
      margin-right: 10px;
      max-width: 70px;
      height: 70px;
      background: linear-gradient(
          to right,
          var(--primary-color),
          var(--secondary-color)
        )
        border-box;
      border-radius: 50em;

      border: 5px solid transparent;
    }
  }
`;
