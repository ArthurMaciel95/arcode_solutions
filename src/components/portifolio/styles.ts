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

  .card-area {
    display: grid;
    gap: 34px;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 1150px) {
    .card-area {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (max-width: 720px) {
    .card-area {
      grid-template-columns: 1fr;
    }
  }

  @media screen and (max-width: 540px) {
    width: 95%;
    margin: 0 auto;

    h2 {
      font-size: 2rem;
    }
    .card-area {
      width: 100%;
    }
  }
`;
