import styled from "styled-components";

export const Container = styled.main`
  .presentation {
    height: 50vh;
    width: 100vw;
    background: var(--gradient-white);
    display: flex;
    justify-content: center;
    border-top: 1px solid var(--grey);

    figure {
      padding-top: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      img {
        width: 80%;
      }
    }
  }

  .forCompanies {
    background: var(--dark-grey);
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 70vh;
    position: relative;
    
    .companiesTitle {
      border-radius: 11px;
      width: 80%;
      height: 80px;
      display: flex;
      background: var(--blue);
      box-shadow: 1px 3px 1px rgba(0, 0, 0, 0.3);
      position: absolute;
      top: -30px;

      h2 {
        display: flex;
        align-items: center;
        text-align: center;
        background: var(--dark-grey);
        border-bottom-left-radius: 11px;
        border-top-left-radius: 11px;
        color: var(--white);
        font-size: 1rem;
        font-family: "Cormorant", serif;
        padding: 5px;
      }

      .companiesTitleBox {
        display: flex;
        align-items: center;
        p {
          color: var(--white);
          text-align: center;
          width: 80%;
          padding: 5px;
          font-weight: bold;
        }

        .buttonBox {

          button {
            font-size: 1.2rem;
          }
        }
      }
    }

    .companiesText {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;

      p {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        text-align: justify;
        height: 50%;
        width: 75%;
        color: var(--white);
        font-size: 1.9rem;
        font-weight: bold;
      }

      figure {
        width: 100%;
        display: flex;
        justify-content: center;
        img {
          width: 80vw;
        }
      }
    }
  }

  .forDevs {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 85vh;
    position: relative;

    .forDevsTitle {
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--blue);
      border-radius: 11px;
      width: 60%;
      height: 50px;
      position: absolute;
      
      top: -20px;
      h2 {
        color: var(--white);
      }
    }

    .forDevsText {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;

      img {
        width: 80vw;
      }

      p {
        width: 75%;
        text-align: justify;
        font-size: 1.8rem;
        color: var(--dark-grey);
        font-weight: bold;
      }
    }
  }

  .aboutUs {
    background: var(--dark-grey);
    height: 80vh;
    min-height: fit-content;

    h2 {
      height: 10%;
      color: var(--white);
      display: flex;
      width: 100%;
      align-items: flex-end;
      justify-content: center;
    }

    p {
      height: 5%;
      text-align: center;
      color: var(--white);
    }

    .group {
      height: 85%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      padding: 2px;
      .groupMember {
        height: 30%;
        width: 33vw;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        a {
          color: var(--grey);
          height: 60%;

          figure {
            img {
              border: 2px solid var(--white);
              border-radius: 50%;
              width: 80px;
            }
          }
        }

        p {
          height: 15%;
          color: var(--white);
          font-weight: bold;
        }
      }
    }
  }
`;
