const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Olá {props.nome}, você tem {props.idade} anos</p>
    </div>
  )
}

const App = () => {
  const nome = 'Peter'
  const idade = 10

  return (
    <div>
      <h1>Olá a todos!</h1>
      <Hello nome='Maya' idade={26 + 10} />
      <Hello nome={nome} idade={idade} />
    </div>
  )
}

export default App