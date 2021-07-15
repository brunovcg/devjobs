import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--dark-grey);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 90%;
  width: 90%;
  color: white;
  padding-bottom: 10px;
  padding-top: 10px;
  margin-top: 3rem;
  border-radius: 5px;
/* 
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    height: 40%;
    width: 45%;
  } */

  button{
    background-color: var(--blue);
    border-radius: 50%;
    width: 150px;
    height: 150px;
    
  }
`;

// export const DevName = styled.button`
//   background-color: var(--blue);
//   height: 150px;
//   width: 150px;
//   border: 2px solid var(--white);
//   color: white;
//   border-radius: 50%;
//   font-size: 1rem;
//   margin-bottom: 10px;
//   margin-top: 5px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;

//   :after {
//     margin-top: 3px;
//     content: "";
//     position: absolute;

//     bottom: -10px;
//     width: 150%;
//     height: 1px;
//     background-color: black;
//   }
//   @media only screen and (min-width: 768px) {
//     :after {
//       width: 1px;
//       height: 100%;
//       right: -20px;
//     }
//     margin-left: 15px;
//   }
// `;

export const DevInfo = styled.div`
  height: 131%;
  width: 74%;

  line-height: 2.5rem;
  margin-top: 5px;
  margin-bottom: 5px;
  h3 {
    font-size: 1.5rem;
  }
  @media only screen and (min-width: 768px) {
    h3 {
      font-size: 1.1rem;
    }
  }
`;
