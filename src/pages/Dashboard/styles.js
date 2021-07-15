import styled from "styled-components";

export const ContainerPage = styled.div`
  background-image: var(--gradient-white);
`;

export const ContainerOptions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10%;
`;

export const ContainerTitleImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 30vh;
  font-size: 1.7rem;
  color: var(--dark-grey);

  a {
    text-align: center;
    padding: 10% 0;
    position: relative;

    .messageLength {
      position: absolute;
      top: 0;
      right: 0;
      background: var(--red);
      color: var(--white);
      font-weight: bold;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      box-shadow: -6px 7px 3px -6px #000000;
      display: ${(props) => {
        if (props.hasInfo === 0) {
          return "none";
        } else {
          return "flex";
        }
      }};
      font-size: 2rem;

      p {
        margin: 0 auto;
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


