import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  height: 100%;

 
    .infoBox {
      width: 100%;
      display:flex;
      justify-content: center;
      height: 65%;

      h2{
          color: var(--dark-grey)
      }

      h3{
          text-align: center;
          color: var(--grey)
      }
    }

    .buttonBox {
      height: 15%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
`;
