import { useState } from 'react'
import Person from './components/Person'

const Filter = (props) =>{
    return(
    <div>
      Filter shown with  
      <input
        value={props.value}
        onChange={props.onChange}
      /> 
    </div>
  )
}

const PersonForm = (props) =>{
  return(
      <form onSubmit={props.addPerson}>
        <div>
          name: 
        <input
          value={props.name.newName}
          onChange={props.name.handleNameChange}
        /> 
        </div>
        <div>
          number: 
        <input
          value={props.number.newNumber}
          onChange={props.number.handleNumberChange}
        /> 
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterUsed, setFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
  
    const alreadyContains = persons.find(
      (e) => e.name === personObject.name);

    if(alreadyContains){
      alert(`${newName} is already added to phonebook`);
    }else{
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => { 
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => { 
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => { 
    setFilter(event.target.value)
  }
  
   const peopleToShow = (filterUsed === '')
     ? persons
     : persons.filter(person => person.name.includes(filterUsed))


  return (
    <div>
      <h1>Phonebook</h1>
      <Filter value={filterUsed} onChange={handleFilterChange}/>

      <h2>Add a new</h2>
      {/* <PersonForm onSubmit={addPerson} 
      name={[newName, handleNameChange]} 
      number={[newNumber, handleNumberChange]}
      /> */}
      
      <form onSubmit={addPerson}>
        <div>
          name: 
        <input
          value={newName}
          onChange={handleNameChange}
        /> 
        </div>
        <div>
          number: 
        <input
          value={newNumber}
          onChange={handleNumberChange}
        /> 
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {peopleToShow.map(person =>
          <Person key={person.id} person={person} />
        )}
      </ul>
    </div>
  )
}

export default App