import styled from "styled-components";

export const Container = styled.div`
  margin: 0vh auto 0vh auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100vw;
  min-height: 100vh;

  main{
    height: 90vh;
    background: var(--gradient-white)
  }

  .objective,
  .education,
  .experience,
  .techSkills,
  .otherSkills {
    padding: 30px 50px;
    text-align: justify;
  }

  .objective,
  .education,
  .experience,
  .techSkills,
  .otherSkills {
    h2 {
      display: flex;
      align-items: center;
      color: var(--blue);
      font-size: 2rem;
      margin: 5px 0 5px 0;

      button {
        width: 30px;
        height: 30px;
        font-size: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    article {
      margin-top: 20px;
      border: 1px solid var(--grey);
      padding: 5px;
      background-color: var(--white);
    }

    div,
    span {
      font-size: 1.5rem;
      font-weight: bold;
    }

    p {
      font-size: 1.6rem;
    }
  }

  .objective {
    p {
      border: 1px var(--grey) solid;
      padding: 5px;
      background-color: var(--white);
      button {
        width: 30px;
        height: 30px;
        font-size: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .education {
    article {
      .educationInfo {
        display: flex;
        width: fit-content;
        align-items: center;
        justify-content: space-between;

        .degreeTitle {
          color: var(--maroon);
        }

        .school {
          color: var(--dark-grey);
        }

        button {
          width: 30px;
          height: 30px;
          font-size: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      .educationDate {
        display: flex;
        color: var(--dark-grey);

        div,
        p {
          font-size: 1.1rem;
        }
      }

      .educationText {
        color: var(--dark-grey);
      }
    }
  }

  .experience {
    article {
      .jobInfo {
        display: flex;
        width: fit-content;
        justify-content: space-between;
        align-items: center;

        .jobTitle {
          color: var(--maroon);
        }

        .company {
          color: var(--dark-grey);
        }

        button {
          width: 30px;
          height: 30px;
          font-size: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      .jobDate {
        display: flex;
        color: var(--dark-grey);

        div,
        p {
          font-size: 1.1rem;
        }
      }

      .jobText {
        color: var(--dark-grey);
      }
    }
  }

  .techSkills,
  .otherSkills {
    .skillBox {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      
      article{
        display: flex;
        justify-content: space-around;
        
        margin: 5px;
      .skillsInfo {
        display: flex;
        align-items: center;
        
        

        .skillName {
          color: var(--maroon);
          font-size: 1.3rem;
        }

        .skillLevel {
          font-size: 1.3rem;
        }

        button {
          width: 30px;
          height: 30px;
          font-size: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }}

  @media (max-width: 500px) {
    .summary,
    .objective,
    .education,
    .experience,
    .techSkills,
    .otherSkills {
      padding: 30px 30px;
      text-align: justify;
    }

    .objective,
    .education,
    .experience,
    .techSkills,
    .otherSkills {
      h2 {
        font-size: 1.8rem;
      }

      p {
        font-size: 1.3rem;
      }
    }
    .summary {
      flex-direction: column;

      .name {
        h2 {
          font-size: 2.5rem;
          text-align: center;
        }
      }

      .personalInfo {
        padding-top: 30px;
        width: 100%;
      }
    }
  }
`;
