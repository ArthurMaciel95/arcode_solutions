import styled from "styled-components";

export const Container = styled.span`
  width: 100%;
  background-color: var(--card-background);
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  z-index: 1000;
  border: 2px solid var(--background-color);
  padding: 15px 30px;

  h4 img {
    animation: spinning 5s infinite linear;
    width: 30px;
    height: 30px;
    display: inline-block;
    margin-left: 10px;
  }

  article {
    display: flex;

    flex-direction: column;
  }
  article div {
    display: flex;
    justify-content: flex-end;
  }

  article p {
  }

  article div a {
    text-decoration: underline;
    margin-right: 20px;

    color: var(--font-link-color);
  }

  @media only screen and (max-width: 720px) {
    .cookieBar article div {
      flex-direction: column;
    }
  }
`;
