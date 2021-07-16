import styled from "styled-components";

export const Container = styled.div`
  background-image: var(--gradient-white);
  height: 90vh;
  display: flex;
  width: 100%;

  .imageResume {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 500px) {
      width: 100%;
      margin-top: 50px;
    }

    h3 {
      height: 30%;
      display: flex;
      align-items: center;
      font-size: 2rem;
      color: var(--dark-grey);
    }

    .resumeBox {
      height: 70%;
      @media (max-width: 500px) {
        width: 100%;
      }
      a {
        :hover {
          opacity: 70%;
          transform: translateY(5%);
          transition: 0.5s;
        }
        @media (max-width: 500px) {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .resume {
          @media (max-width: 500px) {
            width: 130px;
          }
        }
      }
    }
  }

  .imageMessage {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 500px) {
      width: 100%;
    }

    h3 {
      height: 30%;
      display: flex;
      align-items: center;
      font-size: 2rem;
      color: var(--dark-grey);
    }

    .messageBox {
      height: 70%;

      @media (max-width: 500px) {
        width: 100%;
      }
      a {
        @media (max-width: 500px) {
          display: flex;
          flex-direction: row-reverse;
          justify-content: center;
        }

        .message {
          :hover {
            opacity: 70%;
            transform: translateY(5%);
            transition: 0.5s;
          }
          @media (max-width: 500px) {
            width: 50%;
          }
        }

        .messageLength {
          display: flex;
          justify-content: flex-end;
          position: relative;

          .alert {
            background: var(--red);
            color: var(--white);
            width: 80px;
            height: 80px;
            display: ${(props) => (props.hasInfo > 0 ? "flex" : "none")};
            font-size: 2rem;
            justify-content: center;
            font-weight: bold;
            align-items: center;
            border-radius: 50%;
            position: absolute;
            bottom: -40px;
            right: -20px;

            @media (max-width: 500px) {
              width: 60px;
              height: 60px;
              bottom: -30px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

// .imageResume {
//   height: 50%;
//   width: 100%;

//   .resumeBox {
//     width: 100%;
//     height: 100%;
//     align-items: center;
//     a {
//       height:100%auto;
//       .resume{
//         width: 50%;
//       }
//     }
//   }
// }
