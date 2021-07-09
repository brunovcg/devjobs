import styled from "styled-components";

export const Container = styled.main`
  .presentation {
    height: 50vh;
    width: 100vw;
    background: var(--gradient-white);
    display: flex;
    justify-content: center;

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
      box-shadow: -9px 12px 15px -6px #000000;
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
        font-size: 1.5rem;
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
      justify-content: flex-start;
      padding-left: 50px;
      align-items: center;
      width: 100%;
      height: 50px;
      position: absolute;
      top: -25px;

      h2 {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        background: var(--blue);
        color: var(--white);
        border-radius: 11px;
        box-shadow: -9px 12px 15px -6px #000000;
      }
    }

    .forDevsText {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;

      figure {
        img {
          width: 80vw;
        }
      }

      p {
        width: 75%;
        text-align: justify;
        font-size: 1.5rem;
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
      font-size: 2rem;
    }

    p {
      height: 5%;
      text-align: center;
      color: var(--light-grey)
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
              box-shadow: -9px 12px 15px -6px #000000;
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

  @media (min-width: 500px) {
    .presentation {
      width: 100%;
      height: 70vh;
      figure {
        width: 30%;
        img {
          width: 400px;
        }
      }
    }

    .forCompanies {
      height: 80vh;

      .companiesTitle {
        width: 400px;
        height: 90px;

        h2 {
          font-size: 1.6rem;
        }

        .companiesTitleBox {
          width: 85%;
          p {
            width: 55%;
            font-size: 1.2rem;
            padding: 0 10px;
          }

          .buttonBox {
            width: 15%;
          }
        }
      }

      .companiesText {
        flex-direction: row;

        p {
          align-items: center;
          width: 40%;
          padding: 0 0px 0 30px;
          margin-right: 35px;
          font-size: 1rem;
        }

        figure {
          width: 40%;
          img {
          }
        }
      }
    }

    .forDevs {
      .forDevsTitle {
        h2 {
          width: 200px;
          height: 60px;
        }
      }

      .forDevsText {
        flex-direction: row;

        figure {
          width: 50%;
          display: flex;
          justify-content: center;
          img {
            width: 95%;
          }
        }

        p {
          width: 55%;

          padding: 0 70px;
        }
      }
    }

    .aboutUs {
      height: 95vh;
      p {
        font-size: 1.3rem;
      }

      .group {
        padding-top: 20px;
        .groupMember {
          width: 30%;
          height: 45%;

          a {
            figure {
              img {
                width: 120px;
              }
            }
          }

          p {
            font-size: 1.4rem;
          }
        }
      }
    }
  }
`;
