import './App.css';
import jsonFoods from './foods.json';
import React from 'react';
import { useState } from 'react';
import FoodBox from './component/FoodBox';
import AddFoodForm from './component/AddFoodForm';
import Search from './component/Search';


function App() {
  const [foods, setFoods] = useState(jsonFoods);

  function addFood({ name, calories, image, servings }) {
    setFoods([...foods, { name, calories, image, servings }]);
  }

  function findFood(searchQuery) {
    const foundFoods = jsonFoods.filter(food => food.name.match(new RegExp(searchQuery, `gi`)));

    setFoods(foundFoods);
  }
  
  function removeFood(food) {
    setFoods(foods.filter(f => f !== food));
  }

  const foodList = foods.map(food => {
    return (
      <FoodBox food={food} removeFood={removeFood} key={food.name} />
    );
  })

  return (<div className="App">
    <Search findFood={findFood} />
    <AddFoodForm addFood={addFood} />
    {foodList}
  </div>);
}


export default App;