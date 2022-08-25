import styled from "styled-components";

export const Footer = styled.section`
  margin: 120px auto;
  max-width: 1400px;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    height: 56px;
    width: 155px;
  }
  p {
    font-size: 1rem;
    color: var(--font-gray-color);
  }

  @media screen and (max-width: 540px) {
    flex-direction: column;
    p {
      font-size: 0.8rem;
      padding: 20px;
    }
    img {
    }
  }
`;
