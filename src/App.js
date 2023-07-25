import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';

function App() {


const [data, setData] = useState(null);
const [team, setTeam] = useState(null);


const getData = async () => {
  let response = await axios.get('https://statsapi.web.nhl.com/api/v1/teams');
  let info = await response.data;
  
  setData(info);

  console.log('test',info.teams[0].name);
  info.teams.map((current)=>{
      if (random===current.id){
        setTeam(current);
        
      }
    })
}

useEffect(()=> {
  getData();
  
},[])

let random = Math.floor(Math.random()*(30-1)+1)

  const loaded = () => {

                return (
          <div className="App">
            <p>Want to learn more about the nhl? here you can find basic info about the leagues teams!</p>
            <div>Team Name: <div>{team.name}</div></div>
            <div>First year of play: <div>{team.firstYearOfPlay}</div></div>
            <div>Conference: <div>{team.conference.name}</div></div>
            <div>venue: <div>{team.venue.name}</div></div>
            <div>abbreviation: <div>{team.abbreviation}</div></div>
            <div>official site: <div>{team.officialSiteUrl}</div></div>
            
            
            
            
          </div>
          )

    }
  

  const loading = () => {
    return (
      <div className="App">

          <div>loading</div>
      </div>
    
    )
  }

  return data && data.teams[0].name ? loaded() : loading();
}


export default App;