import { Container } from './styles'

function Loading(Component) {
  return function LoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />
    return (
      <Container>
        <p> Carregando os dados...</p>
      </Container>
    )
  }
}

export default Loading