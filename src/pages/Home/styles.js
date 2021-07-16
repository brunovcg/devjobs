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
        font-family: "Carrois Gothic", sans-serif;
        padding: 5px;
      }

      .companiesTitleBox {
        display: flex;
        align-items: center;
        width: 70%;
        p {
          color: var(--white);
          text-align: center;
          width: 100%;
          padding: 5px;
          font-weight: bold;
          font-size: 1rem;
          font-family: "Carrois Gothic", sans-serif;
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
        font-family: "Carrois Gothic", sans-serif;
        transform: translateY(-60px);

        @media (max-height: 700px) {
          font-size: 1rem;
          transform: translateY(-20px);
        }
      }

      figure {
        width: 100%;
        display: flex;
        justify-content: center;
        transform: translateY(-40px);
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
        font-family: "Carrois Gothic", sans-serif;
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
        font-family: "Carrois Gothic", sans-serif;

        @media (max-height: 700px) {
          font-size: 1rem;
          transform: translateY(-20px);
        }
      }
    }
  }

  .aboutUs {
    background: var(--dark-grey);
    height: 80vh;
    min-height: 100vh;

    h2 {
      height: 10%;
      color: var(--white);
      display: flex;
      width: 100%;
      align-items: flex-end;
      justify-content: center;
      font-size: 2rem;
      font-family: "Carrois Gothic", sans-serif;
    }

    p {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 5%;
      text-align: center;
      color: var(--light-grey);
      font-family: "Carrois Gothic", sans-serif;
    }

    .group {
      height: 85%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      padding: 2px;
      .groupMember {
        height: 25%;
        width: 33vw;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        a {
          color: var(--grey);
          height: 70%;
          display: flex;
          align-items: flex-end;

          figure {
            img {
              border: 2px solid var(--white);
              border-radius: 50%;
              width: 80px;
              box-shadow: -9px 12px 15px -6px #000000;
              transition: 0.4s;

              :hover {
                width: 90px;
                box-shadow: -10px 13px 20px -6px #00000099;
                transition: 0.4s;
              }
            }
          }
        }

        .devInfo {
          height: 30%;
          p {
            height: 50%;
            color: var(--white);
            font-weight: bold;
            font-family: "Carrois Gothic", sans-serif;
            font-size: 0.8rem;
          }

          @media (max-height: 700px) {
            font-size: 0.7rem;
            transform: translateY(20px);
          }
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
          width: 70vh;
        }
      }
    }

    .forCompanies {
      height: 80vh;

      .companiesTitle {
        width: 400px;
        height: 90px;

        h2 {
          font-size: 1.3rem;
          padding: 0 25px;
        }

        .companiesTitleBox {
          width: 80%;
          p {
            width: 100%;
            font-size: 1.3rem;
            padding: 0 20px;
          }
        }
      }

      .companiesText {
        flex-direction: row;

        p {
          align-items: center;
          width: 50%;
          padding: 0 0 0 50px;
          margin-right: 35px;
          font-size: 2rem;
          line-height: 3.5rem;
        }

        figure {
          width: 50%;
          img {
            width: 80%;
          }
        }
      }
    }

    .forDevs {
      .forDevsTitle {
        h2 {
          padding: 2% 0;
          width: 250px;
          height: 80px;
          font-size: 1.3rem;
        }
      }

      .forDevsText {
        flex-direction: row;

        figure {
          width: 50%;
          display: flex;
          justify-content: center;
          img {
            width: 60%;
          }
        }

        p {
          width: 50%;
          font-size: 2rem;
          padding: 0 100px 0 0;
          line-height: 3.5rem;
          font-family: "Carrois Gothic", sans-serif;
        }
      }
    }

    .aboutUs {
      height: 95vh;
      p {
        font-size: 1.3rem;
        padding: 10px 0;
      }

      .group {
        padding-top: 20px;
        max-width: 900px;
        margin: 0 auto;
        .groupMember {
          width: 30%;
          height: 45%;

          a {
            height: 70%;
            align-items: flex-start;
            figure {
              img {
                width: 110px;
                :hover {
                  width: 121px;
                }
              }
            }
          }

          .devInfo {
            margin-top: 50px;
            height: 30%;
            p {
              height: 40%;
              padding: 0;
              font-size: 1.2rem;
              transform: translateY(-70px);
            }
          }
        }
      }
    }
  }
`;
