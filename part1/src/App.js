import { useState } from 'react'

const Exibir = ({ contador }) => <div>{contador}</div>

const Botao = ({ handleClique, texto }) => <button onClick={handleClique}>{texto}</button>

const Historico = (props) => {
  if (props.todosOsCliques.length === 0) {
    return (
      <div>
        Clique em um dos botões para usar a aplicação!
      </div>
    )
  }
  return (
    <div>
      Histórico de cliques nos botões: {props.todosOsCliques.join(' ')}
    </div>
  )
}

const App = () => {
  const [esquerda, setEsquerda] = useState(0)
  const [direita, setDireita] = useState(0)
  const [todosOsCliques, setTodos] = useState([])

  const handleCliqueEsquerda = () => {
    setTodos(todosOsCliques.concat('E'))
    const atualizaEsquerda = esquerda + 1
    setEsquerda(atualizaEsquerda)
  } 

  const handleCliqueDireita = () => {
    setTodos(todosOsCliques.concat('D'))
    const atualizaDireita = direita + 1
    setDireita(atualizaDireita)
  }

  return (
    <div>
      {esquerda}
      <Botao handleClique={handleCliqueEsquerda} texto='Esquerda' />
      <Botao handleClique={handleCliqueDireita} texto='Direita' />
      {direita}
      <Historico todosOsCliques={todosOsCliques} />
    </div>
  )
}

export default App