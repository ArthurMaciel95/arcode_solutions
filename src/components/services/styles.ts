import styled from "styled-components";

export const Container = styled.section`
  margin: 120px auto;
  width: 80%;

  .card-area {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 25px;
  }

  h2 {
    font-size: 2.5rem;
    color: var(--primary-color);
    text-align: center;
    margin-bottom: 60px;
  }

  @media screen and (max-width: 1150px) {
    .card-area {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (max-width: 720px) {
    .card-area {
      grid-template-columns: 1fr;
      align-items: center;
    }
  }

  @media screen and (max-width: 540px) {
    width: 95%;
    margin: 80px auto;

    .card-area {
      grid-template-columns: 1fr;
      font-size: 2.5rem;
      width: 100%;
    }

    h2 {
      font-size: 2rem;
    }
  }
`;
