import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 276px;

  img {
    border-radius: 4px;
  }

  .tag-area {
    display: flex;
  }

  .post-date {
    font-size: 1rem;
    color: var(--font-gray-color);
  }

  .tag-area .tags {
    font-size: 0.8rem;
    color: var(--white-color);
    background: rgb(100, 159, 255);
    width: fit-content;
    padding: 6px 11px;
    border-radius: 15px;
    font-weight: 600;
    width: fit-content;
    margin: 6px 0px;
  }

  .tag-area .tags:nth-child(1) {
    margin-right: 5px;
  }
  h4 {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 22p;
    line-height: 2.1rem;
    color: var(--font-black-color);
  }

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

    img {
      width: 100%;
    }
  }
`;
