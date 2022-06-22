import './App.css';
import jsonFoods from './foods.json';
import React from 'react';
import { useState } from 'react';
import FoodBox from './component/FoodBox';
import AddFoodForm from './component/AddFoodForm';


function App() {
  const [foods, setFoods] = useState(jsonFoods);

  function addFood({ name, calories, image, servings }) {
    setFoods([...foods, { name, calories, image, servings }]);
  }

  const foodList = foods.map(food => {
    return (
      <FoodBox {...food} />
    );
  })

  return (<div className="App">
    <AddFoodForm addFood={addFood} />
    {foodList}
  </div>);
}


export default App;