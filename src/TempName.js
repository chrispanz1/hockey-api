import { useEffect,useState } from 'react';
import './App.css';
import axios from 'axios'; 

function App() {

  const [name, setName] = useState("")
  const [country, setCountry] = useState([])

  const getData = async (i) => {
    const response = await axios.get('https://api.nationalize.io?name=Patel')
    
    const data = await response.data
    console.log(data); 
    setName(data)
    setCountry(data.country)
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <>
      <h2>Your Name: {name.name}</h2>
      <h4>% chance you came from: </h4>

      {country.map((eachCountry,i)=>{

      return(
        <h3 key={i}>{eachCountry.country_id}  %{(eachCountry.probability*100).toFixed(2)}</h3>
      ) 

      })}
          </>
        )
      }

export default App;