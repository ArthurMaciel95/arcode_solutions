import styled from "styled-components";

export const Container = styled.section`
  max-width: 600px;
  background-color: var(--white-color);
  position: absolute;
  left: 35%;
  top: 20%;
  border-radius: 4px;
  padding: 35px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    color: var(--font-gray-color);
    font-size: 2rem;
  }

  img {
    margin: 39px;
  }

  @media screen and (max-width: 540px) {
    left: 2%;
    padding: 10px;
    width: 95%;

    h3 {
      font-size: 1.2rem;
    }
  }
`;
