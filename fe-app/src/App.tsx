import { useEffect, useState } from 'react';
import './App.css';
import GameList from './components/GameList';
import { Item } from './types/globals';

function App() {

  const [data,setData]=useState<Item[]>([]);
    
  const getData = () => {
      fetch('gamesList.json' ,{
          headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }
      })
      .then(function(response){
          return response.json();
      })
      .then(function(myJson) {
          setData((myJson))
      });
  }
  
  useEffect(()=>{
      getData()
  },[])

  return (
    <div className="App">
      <GameList gameList={data} />
    </div>
  );
}

export default App;
