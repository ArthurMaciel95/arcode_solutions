import styled from "styled-components";

export const Container = styled.nav`
  background-color: var(--background-color);
  height: 5rem;
  display: flex;
  justify-content: center;
  .nav-area {
    display: flex;
    width: 80%;
    align-items: center;
    margin: 0 auto;
    justify-content: space-between;
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
        padding: 0px 20px;
        color: var(--font-gray-color);
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
  .navbar-image-profile {
    border-radius: 50%;
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
      justify-content: space-around;
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
