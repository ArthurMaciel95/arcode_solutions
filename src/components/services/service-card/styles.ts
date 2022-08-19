import styled from "styled-components";

export const Container = styled.div`
  max-width: 376px;
  background-color: var(--card-background);
  border-radius: 4px;
  box-shadow: var(--shadow-color);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 150px;
    height: 150px;
    margin-bottom: 10px;
  }
  p {
    font-size: 22px;
    line-height-step: 27px;
    color: var(--font-gray-color);
    text-align: center;
  }
`;
