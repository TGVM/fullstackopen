import { useState } from 'react'

const Botao = ({ handleClique, texto }) => <button onClick={handleClique}>{texto}</button>

const Votes = ({votes}) => <p>has {votes} votes</p>

const App = () => {
  const anecdotes = [
    'Se fazer algo dói, faça isso com mais frequência.',
    'Contratar mão de obra para um projeto de software que já está atrasado, faz com que se atrase mais ainda!',
    'Os primeiros 90% do código correspondem aos primeiros 10% do tempo de desenvolvimento... Os outros 10% do código correspondem aos outros 90% do tempo de desenvolvimento.',
    'Qualquer tolo escreve código que um computador consegue entender. Bons programadores escrevem código que humanos conseguem entender.',
    'Otimização prematura é a raiz de todo o mal.',
    'Antes de mais nada, depurar é duas vezes mais difícil do que escrever o código. Portanto, se você escrever o código da forma mais inteligente possível, você, por definição, não é inteligente o suficiente para depurá-lo.',
    'Programar sem o uso extremamente intenso do console.log é o mesmo que um médico se recusar a usar raio-x ou testes sanguíneos ao diagnosticar pacientes.',
    'A única maneira de ir rápido é ir bem.'
  ]
  
  const pontos = new Uint8Array(8); 

  const [votes, setVotes] = useState(pontos);

  const [selected, setSelected] = useState(0)

  const handleCliqueSelected = () => {
    const atualizaSelected = Math.floor(Math.random() * (anecdotes.length - 0));
    setSelected(atualizaSelected)
  } 

  const handleCliqueVote = () => {
    const copia = [...votes];
    copia[selected] += 1;
    findMostVotes();
    setVotes(copia);
  } 

  let mostVotes = 0;
  const findMostVotes = () => {
    let maior = 0;
    votes.forEach(t => {
      if(t > maior) maior = t;
    });
    mostVotes = maior;
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <Votes votes={votes[selected]} />
      <Botao handleClique={handleCliqueSelected} texto='next anecdote' />
      <Botao handleClique={handleCliqueVote} texto='vote' />
      <br />
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVotes]}</p>
      <Votes votes={votes[mostVotes]} />
    </div>
  )
}

export default App