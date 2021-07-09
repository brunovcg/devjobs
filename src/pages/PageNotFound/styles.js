import styled from "styled-components";

export const Container = styled.main`
  height: 83vh;
  background: var(--gradient-sunny);

  .sun {
    display: flex;
    justify-content: center;

    img {
      width: 150px;
      position: absolute;
      top: 0;
      z-index: 2;
    }
  }

  .mainBox {
    display: flex;
    flex-direction: column;
    height: 100%;
    .notFoundText {
      text-align: center;
      height: 65%;
      color: var(--white);
      padding: 50px 30px 0 30px;
      font-size: 2.1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Gugi", serif;
    }

    .mapGuy {
      display: flex;
      justify-content: center;
      align-items: flex-end;

      img {
        height: 80%;
      }
    }
  }

  @media (min-width: 500px) {
    height: 85vh;

    .sun {
      img {
        width: 180px;
        position: absolute;
        top: -10px;
        z-index: 2;
      }
    }
    .mainBox {
      flex-direction: row-reverse;

      .notFoundText {
        height: 100%;
        width: 50%;
        padding: 0 120px 0 20px;
        font-size: 3rem;
      }

      .mapGuy {
        height: 100%;
        width: 50%;
      }
    }
  }
`;
