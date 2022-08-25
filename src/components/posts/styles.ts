import styled from "styled-components";

export const Container = styled.section`
  margin: 120px auto;
  max-width: 1400px;
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 25px;

  @media screen and (max-width: 1150px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  @media screen and (max-width: 720px) {
  }
  @media screen and (max-width: 540px) {
    display: flex;
    flex-direction: column;
    margin: auto;
  }
`;
