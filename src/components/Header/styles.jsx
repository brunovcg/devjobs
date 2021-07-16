import styled from "styled-components";

export const HalfMoon = styled.div`
  background: var(--white);
  z-index: 0;
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
      height: 115px;
      width: 115px;
      border-radius: 50%;
      text-align: center;
      margin-top: 50px;
      z-index: 1;
      border: 6px double var(--white);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: width 0.3s, height 1s;
      box-shadow: -0.5px 0.5px 10px #4040402f;
      h1 {
        transition: 0.5s;
        font-size: 1.2rem;
      }
      :hover {
        transition: width 0.3s, height 1s;
        height: 120px;
        width: 120px;
        box-shadow: -0.5px 0.5px 20px #4040402f;

        h1 {
          transition: 0.5s;
          font-size: 1.4rem;
          text-shadow: -0.5px 0.5px 10px #e9eef11f;
        }
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
  height: 10vh;

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
