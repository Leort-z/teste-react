import { useEffect, useState } from 'react'

import Table from '../Tabela/index.js'
import Select from '../Select/index.js'
import Loading from '../Loading/index.js'
import Cabecalho from '../Cabecalho/index.js'
import Rodape from '../Rodape/index.js'

import GlobalStyle from '../../styles/globals.js'

export default function Pagina() {

  const TableLoading = Loading(Table)

  const [appState, setAppState] = useState({
    loading: false,
    data: null
  })

  const [directorship, setDirectorship] = useState({
    loading: false,
    data: null
  })

  const [dre, setDre] = useState('')

  function fetchAllData() {
    setAppState({ loading: true })
    const url = 'https://hom-escolaaberta.sme.prefeitura.sp.gov.br/api/smeescolas/'
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setAppState({ loading: false, data: data })
      })
  }

  useEffect(() => {
    fetchAllData();
  }, [setAppState])

  useEffect(() => {
    setAppState({ loading: true })
    const url = 'https://hom-escolaaberta.sme.prefeitura.sp.gov.br/api/diretorias/'
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setDirectorship({ loading: false, data: data })
      })
  }, [setDirectorship])

  useEffect(() => {
    if (dre === 'todasDiretorias') {
      fetchAllData();
    }
    setAppState({ loading: true })
    const url = `https://hom-escolaaberta.sme.prefeitura.sp.gov.br/api/smeescolas/${dre}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setAppState({ loading: false, data: data })
      })
  }, [dre])

  return (
    <div className="App">
      <GlobalStyle />
      <Cabecalho></Cabecalho>
      <Select directorship={directorship.data} changeDirectorship={setDre}></Select>
      <TableLoading isLoading={appState.loading} data={appState.data} />
      <Rodape></Rodape>
    </div>
  )
}