import styled from 'styled-components'

const mainColor = '#233a6c'
const tableBordColor = 'black'

export const Table = styled.table`
   max-width: 70vw;
   height: 70vh;
   margin: 0 auto;

   text-align: center;

   border-spacing: 0px;
   border: 1px solid ${tableBordColor};
   border-collapse: collapse;
`

export const HeadTitle = styled.tr`
   > th {
      padding: 20px;

      color: white;
      background-color: ${mainColor};

      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 0.5px;

      border: 1px solid ${tableBordColor};
   }
`
export const HeadRow = styled.tr`
   > th {
      padding: 10px;

      background-color: #32539A;
      color: white;

      font-weight: 300;

      border-collapse: collapse;
      border-right: 1px solid ${tableBordColor};

      &:first-child {
         width: 15%;
      }
   }
`

export const BodyRows = styled.tr`
   > td {
      border-right: 1px solid ${tableBordColor};
   }

   &:nth-child(2n) {
      background-color: #DDD;
   }

  &:hover {
      background-color: ${mainColor};
      color: white;
   }

`