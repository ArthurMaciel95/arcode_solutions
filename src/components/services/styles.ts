import styled from "styled-components";

export const Container = styled.section`
  margin: 120px auto;
  max-width: 1400px;

  h2 {
    font-size: 2.5rem;
    color: var(--primary-color);
    text-align: center;
    margin-bottom: 60px;
  }

  .services__area {
    width: 70vw;
    margin: 0 auto;
  }

  .services__area .services__layout {
    display: flex;
    margin: 120px 0px;
    gap: 20px;
    div {
      flex: 1;
      small {
        color: #5a69a0;
        letter-spacing: 2px;
      }
      h3 {
        font-size: 2.5rem;
        color: var(--primary-color);
        margin: 5px 0px;
      }
      p {
        color: var(--font-gray-color);
        font-size: 1.3rem;
        font-weight: 400;
      }
      ul {
        padding-inline-start: 0rem;
        li {
          display: flex;
          align-items: center;
          list-style: none;
          color: var(--font-gray-color-ligth);
          font-weight: 300;
          font-size: 1.2rem;
          padding: 6px 0px;
          gap: 10px;
        }
      }
      .services__icons {
        display: flex;
        margin: 20px 0px;
        gap: 20px;
        flex-wrap: wrap;
        span {
          gap: 10px;
          padding: 10px;
          border-radius: 4px;
          border: var(--primary-color) solid 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          min-width: 140px;
          height: 130px;
          p {
            font-size: 1rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1150px) {
    .services__area .services__layout {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 720px) {
    .services__area {
      width: 95vw;
    }
  }

  @media screen and (max-width: 540px) {
    width: 95%;
    margin: 80px auto;

    h2 {
      font-size: 2rem;
    }
    .services__area {
      .services__layout {
        div {
          h3 {
            font-size: 2rem;
            font-weight: 600;
          }
          p {
            font-size: 20px;
          }
          ul li {
            font-size: 16px;
          }
        }
      }
    }
  }
`;
