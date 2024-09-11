import { useState } from 'react'

const Exibir = (props) => {
  if(props.stats[0] === 0){
    return(<div><p>No feedback given</p></div>)
  }
  return(
    <table>
      <tbody>
        <tr>
          <td>{props.texto[0]}</td><td>{props.contador[0]}</td>
        </tr>
        <tr>
          <td>{props.texto[1]}</td><td>{props.contador[1]}</td>
        </tr>
        <tr>
          <td>{props.texto[2]}</td><td>{props.contador[2]}</td>
        </tr>
          <Statistics texto={"all"} valor={props.stats[0]} />
          <Statistics texto={"average"} valor={props.stats[1]} />
          <Statistics texto={"positive"} valor={props.stats[2]} />
        </tbody>
    </table>
  )

}

const Botao = ({ handleClique, texto }) => <button onClick={handleClique}>{texto}</button>

const Statistics = ({texto, valor}) => {
  return(
    <tr>
      <td>{texto}</td><td>{valor}</td>
    </tr>
  )
}

const App = () => {
  // salve os cliques de cada botão em seu próprio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleCliqueGood = () => {
    const atualizaGood = good + 1
    setGood(atualizaGood)
  } 
  const handleCliqueNeutral = () => {
    const atualizaNeutral = neutral + 1
    setNeutral(atualizaNeutral)
  } 
  const handleCliqueBad = () => {
    const atualizaBad = bad + 1
    setBad(atualizaBad)
  } 
  const statistics = [
    (good + neutral + bad),
    ((good + (-1* bad))/(good + neutral + bad)),
    ((100 * good) / (good + neutral + bad))
  ]

  return (
    <div>
      <h1>give feedback</h1>
      <Botao handleClique={handleCliqueGood} texto='good' />
      <Botao handleClique={handleCliqueNeutral} texto='neutral' />
      <Botao handleClique={handleCliqueBad} texto='bad' />
      <h1>statistics</h1>
      <Exibir texto={["good", "neutral", "bad"]} contador={[good, neutral, bad]} stats={statistics} />
      
    </div>
  )
}

export default App