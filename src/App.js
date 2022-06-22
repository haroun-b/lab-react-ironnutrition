import './App.css';
import jsonFoods from './foods.json';
import React from 'react';
import { useState } from 'react';
import FoodBox from './component/FoodBox';


function App() {
  const [foods, setFoods] = useState(jsonFoods);

  const foodList = foods.map(food => {
    return (
      <FoodBox {...food} />
    );
  })

  return (<div className="App">
    {foodList}
  </div>);
}


export default App;