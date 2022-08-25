import styled from "styled-components";

export const Container = styled.section`
  margin: 120px auto;
  max-width: 1400px;

  h2 {
    font-weight: 600;
    font-size: 3rem;
    text-align: center;
    color: var(--primary-color);
    margin-bottom: 60px;
  }

  .summary {
    font-size: 2rem;
    color: var(--font-black-color);
    font-weight: 400;
  }

  .description {
    color: var(--font-gray-color);
    font-size: 1.5rem;
  }

  @media screen and (max-width: 1150px) {
  }

  @media screen and (max-width: 720px) {
    h2 {
      font-size: 2.5rem;
    }
    .summary {
      font-size: 1.3rem;
    }
    .description {
      font-size: 1rem;
      line-height: 1.3rem;
    }
  }

  @media screen and (max-width: 540px) {
    width: 95%;
  }
`;
