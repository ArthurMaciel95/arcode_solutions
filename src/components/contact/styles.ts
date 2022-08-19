import styled from "styled-components";

export const Container = styled.section`
  width: 80vw;
  margin: 0 auto;

  h2 {
    color: var(--primary-color);
    font-size: 3rem;
    margin-top: 68px;
    text-align: center;
    margin-bottom: 41px;
  }

  form {
    background-color: var(--card-background);
    padding: 20px;
    box-shadow: var(--shadow-color);
    .form-wrap {
      display: flex;
      .form-section-one {
        display: flex;
        flex: 1;
        flex-direction: column;
        margin-right: 20px;
      }
      .form-section-two {
        flex: 1;
      }
    }
  }

  @media screen and (max-width: 720px) {
  }
  @media screen and (max-width: 540px) {
    width: 95%;

    h2 {
      font-size: 2.5rem;
    }
    .form-wrap {
      flex-direction: column-reverse;
      .form-section-one {
        margin-right: 0px;
      }
      .form-section-two {
        margin-bottom: 40px;
      }
    }
  }
`;
