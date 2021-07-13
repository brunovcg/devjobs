import styled from "styled-components";

export const HalfMoon = styled.div`
  background: var(--white);
  z-index: 1;
  text-align: center;
  border-radius: 50% / 0 0 100% 100%;
  width: 44%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 500px) {
    width: 30vw;
  }

  a {
    div {
      background-color: var(--blue);
      color: white;
      height: 100px;
      width: 100px;
      border-radius: 50%;
      text-align: center;
      margin-top: 50px;
      z-index: 1;
      border: 6px double var(--white);
      display: flex;
      align-items: center;
      justify-content: center;
      h1 {
        font-size: 1.2rem;
      }
      :hover {
        height: 110px;
        width: 110px;
      }
      @media (min-width: 500px) {
        margin-top: 60px;
      }
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding-right: 4px;
  padding-left: 4px;
  background: ${(props) =>
    props.setColor ? props.setColor : "var(--grey-header)"};
  border-bottom: 1px solid
    ${(props) => (props.setBorder ? props.setBorder : "var(--grey)")};
  height: 15vh;

  .left,
  .right {
    width: 33%;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  h3 {
    font-size: 15px;
  }

  @media (min-width: 500px) {
    height: 10vh;
  }
`;
