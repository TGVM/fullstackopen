import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchFilter, setSearchFilter] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    if(searchFilter.trim()===''){
      setCountries([])
      return
    }

    const fetchCountry = async() =>{
      try{
        const url = `https://restcountries.com/v3.1/name/${searchFilter}`
        const response = await axios.get(url);
        console.log(response.data);
        setCountries(response.data);
      }
      catch(error){
        console.error("Error fetching data: ", error.data);
      }
    };
    fetchCountry();
  }, [searchFilter])

  const renderLanguage = (languages) =>{
    if(Array.isArray(languages)){
      return languages.join(", ");
    }else if(typeof languages==="object"){
      return Object.values(languages).join(", ");
    }else{
      return "Unknown"
    }
  }

  const showCountry = (country) =>(
    setSelectedCountry(country)
  )

  return (
    <div>
      <label>find countries: 
        <input type="text" 
        value={searchFilter} 
        onChange={(e) => setSearchFilter(e.target.value)}>
        </input>
      </label>
      {countries.length > 10 && (
        <p>Too many matches, specify another filter</p>
      )}
      {countries.length <= 10 && countries.length > 1 && (
        <div>
          <ul>
            {countries.map(country=>(
              <li key={country.name.common}>{country.name.common}
                <button onClick={() => showCountry(country)}>show</button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* {countries.length === 1 && (selectedCountry(countries[0]))} */}
      {selectedCountry && (
        <div>
          <h3>{selectedCountry.name.common}</h3>
          <p>capital {selectedCountry.capital}</p>
          <p>area {selectedCountry.area}</p>
          <h4>languages: 
          </h4>
          <p>{selectedCountry.languages && renderLanguage(selectedCountry.languages)}</p>
          {<img src={selectedCountry.flags.png} alt={`${selectedCountry.name.common}`}></img>}
        </div>
      )}
    </div>
  )
}

export default App