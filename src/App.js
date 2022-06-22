import './App.css';
import jsonFoods from './foods.json';
import React from 'react';
import { useState } from 'react';


function App() {
  const [foods, setFoods] = useState(jsonFoods);

  const foodList = foods.map(food => {
    return (<div key={food.name}>
      <h2>{food.name}</h2>
      <img src={food.image} height="100" alt={food.name} />
    </div>);
  })

  return (<div className="App">
    {foodList}
  </div>);
}


export default App;