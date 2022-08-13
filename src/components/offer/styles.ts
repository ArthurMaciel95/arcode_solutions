import styled from "styled-components";

export const Container = styled.section`
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    text-align: center;
    color: #222;
    font-size: 64px;
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
`;
