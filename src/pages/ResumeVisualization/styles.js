import styled from "styled-components";

export const Container = styled.div`
  margin: 0vh auto 0vh auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100vw;
  min-height: 90vh;

  .summary,
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
    }

    article {
      margin-top: 25px;
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

  .header {
    margin-bottom: 0px;
  }

  .summary {
    display: flex;
    justify-content: space-between;
    padding: 60px;
    background: var(--light-grey);

    .name {
      color: var(--dark-grey);
      h2 {
        font-size: 4rem;
      }
    }
    .personalInfo {
      text-align: end;
      color: var(--dark-grey);
      width: 30%;
      h3 {
        font-size: 1.4rem;
        word-wrap: break-word;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        margin: 10px 0;
        svg {
          margin-left: 20px;
        }
      }
    }
  }

  .objective {
  }

  .education {
    article {
      .educationInfo {
        display: flex;
        width: fit-content;
        justify-content: space-between;

        .degreeTitle {
          color: maroon;
        }

        .school {
          color: var(--dark-grey);
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

        .jobTitle {
          color: maroon;
        }

        .company {
          color: var(--dark-grey);
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

      .skillsInfo {
        display: flex;
        margin: 0 30px 0 0;

        .skillName {
          color: maroon;
          font-size: 1.3rem;
        }

        .skillLevel {
          font-size: 1.3rem;
        }
      }
    }
  }

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
      padding-top: 70px;

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

  @media print {
    .noPrint,
    .noPrint * {
      display: none !important;
    }
    @page {
      margin: 0;
      size: auto;
      page-break-before: always;
      body {
        @media print {
          margin: 2cm 0;
        }
      }
    }
  }
`;
