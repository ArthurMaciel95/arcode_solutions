import styled from "styled-components";

export const Container = styled.section`
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    text-align: center;
    color: var(--font-black-color);
    font-size: 4rem;
    font-family: "Open Sans", sans-serif;

    span {
      background-image: linear-gradient(
        to right,
        var(--primary-color),
        var(--secondary-color)
      );
      padding: 1px 20px;
      color: #fff;
    }
  }
  h3 {
    text-align: center;
    font-family: "Poppins", "sans";
    font-size: 2rem;
    color: var(--font-gray-color);
    margin: 25px 0;
    font-weight: 400;
  }
  .btn-whats {
    font-size: 2rem;
  }

  @media screen and (max-width: 720px) {
    h2 {
      font-size: 3rem;
      span {
      }
    }
    h3 {
      font-size: 1.5rem;
    }
    button {
      font-size: 1.2rem;
      padding: 10px 15px;
    }
    .btn-whats {
      font-size: 1.5rem;
      padding: 10px;
    }
  }

  @media screen and (max-width: 540px) {
    margin: 60px 15px;
    h2 {
      font-size: 2rem;
      span {
      }
    }
    h3 {
      font-size: 1.2rem;
      font-weight: 600;
    }
    button {
      font-size: 1rem;
      padding: 10px 15px;
    }
    .btn-whats {
      font-size: 1rem;
      padding: 8px;
    }
  }
`;
