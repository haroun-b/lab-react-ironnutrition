import { Divider, Input } from 'antd';
import React from 'react';
import { useState } from 'react';

const AddFoodForm = ({ addFood }) => {
  const [formData, setFormData] = useState({
    name: ``,
    image: ``,
    calories: 0,
    servings: 0
  });

  function handleSubmit(event) {
    event.preventDefault();

    addFood(formData);
    setFormData({
      name: ``,
      image: ``,
      calories: 0,
      servings: 0
    });
  }

  function handleChange(event, fieldName) {
    setFormData({ ...formData, [fieldName]: event.target.value });
  }

  return (
    <form action="#" onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={formData.name}
        type="text"
        onChange={(e) => {
          handleChange(e, `name`);
        }}
      />

      <label>Image</label>
      {/* render antd <Input /> type="text" here */}
      <Input
        value={formData.image}
        type="text"
        placeholder="Image URL"
        onChange={(e) => {
          handleChange(e, `image`);
        }}
      />

      <label>Calories</label>
      {/* render antd <Input /> type="number" here */}
      <Input
        value={formData.calories}
        type="number"
        min={0}
        onChange={(e) => {
          handleChange(e, `calories`);
        }}
      />

      <label>Servings</label>
      {/* render antd <Input /> type="number" here */}
      <Input
        value={formData.servings}
        type="number"
        min={0}
        onChange={(e) => {
          handleChange(e, `servings`);
        }}
      />

      <button type="submit">Create</button>
    </form>
  );
};

export default AddFoodForm;
