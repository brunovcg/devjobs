import styled from "styled-components";

export const ContainerPage = styled.div`
  background-image: var(--gradient-white);
`;

export const ContainerOptions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10% 2%;

  @media (max-width: 500px) {
   flex-direction: column;
   padding: 20%;
  }
`;

export const ContainerTitleImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 30vh;
  font-size: 1.7rem;
  color: var(--dark-grey);

  h3 {
    font-size: 2.5rem;
    font-family: "Carrois Gothic", sans-serif;

    @media (max-width: 500px) {
      font-size: 1.7rem;
    }
  }

  a {
    text-align: center;
    padding: 10% 0;
    position: relative;
    transition: 0.5s;

    .messageLength {
      position: absolute;
      top: 0;
      right: 0;
      background: var(--red);
      color: var(--white);
      font-weight: bold;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      font-size: 2rem;
      transition: 0.5s;
      box-shadow: -4px 7px 7px -3px #00000099;
      display: ${(props) => {
        if (props.hasInfo === 0) {
          return "none";
        } else {
          return "flex";
        }
      }
    };

      p {
        margin: 0 auto;
        font-family: "Carrois Gothic", sans-serif;
        transition: 0.5s;
      }
    }

    :hover {
      opacity: 70%;
      transform: translateY(5%);
      transition: 0.5s;

      .messageLength {
        box-shadow: -3px 6px 6px -3px #00000099;
      }

      p {
        text-shadow: -1px -1px 2px #ffffff99;
        transition: 0.5s;
      }
    }
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  transition: 0.5s;

  :hover {
    opacity: 70%;
    transform: translateY(5%);
    transition: 0.5s;
  }
`;


