import { Container } from './styles'

export default function Select({ directorship, changeDirectorship }) {
  if (!directorship || directorship.length === 0)
    return <p>Não conseguimos obter os dados, tente novamente mais tarde</p>

  function handleDreChange(e) {
    changeDirectorship(e.target.value)
  }

  return (
    <Container>
      <label>Selecione uma diretoria: </label>
      <select onChange={handleDreChange}>
        <option value='todasdirectorship'>TODAS DIRETORIAS</option>
        {directorship.results.map(directorship => {
          return (
            <option key={directorship.dre} value={directorship.dre}>{directorship.diretoria}</option>
          )
        })}
      </select>
    </Container>
  )
}
