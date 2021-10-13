import styled from 'styled-components'

export const Container = styled.div`
   height: 14vh;
   width: 70vw;
   margin: 0 auto;
   
   display: flex;
   align-items: center;

   > label {
      margin-right: 20px;
      font-size: 1.6rem;
      font-weight: 500;
   }

   > select {
      width: 50%;
      height: 40%;
      font-size: 1.1rem;

      border: 2px solid #233a6c;

      > option {
         font-size: 1.1rem;
      }
   }
`