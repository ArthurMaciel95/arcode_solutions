import styled from "styled-components";

export const Container = styled.nav`
  background-color: var(--white-color);
  height: 5rem;

  .nav-area {
    display: flex;
    width: 80%;
    align-items: center;
    margin: 0 auto;
    justify-content: space-around;
    .btn-sidebar {
      display: none;
    }
  }

  .menu {
    display: flex;
    li {
      list-style: none;
      display: flex;

      & a {
        font-weight: 400;
        padding: 20px;
        color: var(--font-gray-color);
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }

  .anchor__dropdown {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 500px) {
    width: 100%;

    .nav-area {
      width: 100%;
      height: 100%;
      .menu {
        display: none;
      }
      a {
        display: none;
      }
      .btn-sidebar {
        display: inline;
      }
    }
  }
`;
