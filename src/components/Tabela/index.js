import React from 'react';

import { Table, HeadTitle, HeadRow, BodyRows } from './styles'

function formatData(data) {
  let schoolData = []
  data.results.forEach((schoolD) => {
    const index = schoolData.findIndex(school => school.tipoesc === schoolD.tipoesc)
    if (index !== -1) {
      schoolData[index].faixas.push({ faixa: schoolD.faixa, count: schoolD.count })
      schoolData[index].totalCount += schoolD.count
    }
    else {
      const newSchool = {
        tipoesc: schoolD.tipoesc,
        faixas: [{
          faixa: schoolD.faixa,
          count: schoolD.count
        }],
        totalCount: schoolD.count
      }
      schoolData.push(newSchool)
    }
  })
  return schoolData
}

function getRange(school, range) {
  const schoolIndex = school.faixas.findIndex(school => school.faixa === range)
  return schoolIndex !== -1 ? school.faixas[schoolIndex].count : 0
}

const Tabela = (props) => {
  const { data } = props;

  if (!data || data.length === 0)
    return <p>No data, try again later</p>

  let formattedData = formatData(data)

  return (
      <>
        <Table>
        <thead>
          <HeadTitle>
            <th colSpan={9}>Escolas por tipo e quantidade de alunos</th>
            <th rowSpan={2}>Total de unidades escolares por tipo</th>
          </HeadTitle>
          <HeadRow>
            <th>Tipo de escola</th>
            <th>Sem estudantes cadastrados</th>
            <th>1 a 250 estudantes</th>
            <th>251 a 500 estudantes</th>
            <th>501 a 1000 estudantes</th>
            <th>1001 a 1500 estudantes</th>
            <th>1501 a 2000 estudantes</th>
            <th>2001 a 2500 estudantes</th>
            <th>Mais de 2500 estudantes</th>
          </HeadRow>
        </thead>
        <tbody>
          {formattedData.map((school, index) => {
            return (
              <BodyRows key={index}>
                <td>{school.tipoesc}</td>
                <td>{getRange(school, 'Sem estudantes cadastrados')}</td>
                <td>{getRange(school, '1 a 250 estudantes')}</td>
                <td>{getRange(school, '251 a 500 estudantes')}</td>
                <td>{getRange(school, '501 a 1000 estudantes')}</td>
                <td>{getRange(school, '1001 a 1500 estudantes')}</td>
                <td>{getRange(school, '1501 a 2000 estudantes')}</td>
                <td>{getRange(school, '2001 a 2500 estudantes')}</td>
                <td>{getRange(school, 'Mais de 2500 estudantes')}</td>
                <td>{school.totalCount}</td>
              </BodyRows>
            )
          })}
        </tbody>
        </Table>
      </>
  )
}

export default Tabela