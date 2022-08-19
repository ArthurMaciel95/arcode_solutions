import styled from "styled-components";

export const Container = styled.div`
  max-width: 376px;
  height: auto;

  position: relative;
  h4 {
    font-size: 2rem;
    color: var(--font-black-color);
    margin: 18px 0px;
  }
  img {
    overflow: hidden;
    background-color: white;
    object-fit: cover;
    box-shadow: var(--shadow-color);
    transition: 0.3s ease-in;

    &:hover {
      transform: scale(1.1);
      transition: 0.3s ease-out;
    }
  }
  p {
    line-height: 27px;
    color: var(--font-gray-color);
    font-size: 1.2rem;
  }
`;
