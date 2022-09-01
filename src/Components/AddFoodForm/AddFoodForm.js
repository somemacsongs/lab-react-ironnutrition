import { useState } from "react";
import {Input} from "antd"
import foods from '../../foods.json';

export default function AddFoodForm() {
  const [form, setForm] = useState({
    name: "",
    image: "",
    calories: 0,
    servings: 0
  });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(`You entered thia food: ${form.name}`)
//   }

  return (
    <form /*onSubmit={handleSubmit}*/>
      <label htmlFor="food-name">Name:</label>
      <Input
        id="food-name"
        type="text"
        onChange={handleChange}
        name="name"
      />
      <label htmlFor="food-image">Image:</label>
      <Input
        id="food-image"
        type="text"
        onChange={handleChange}
        name="image"
      />
      <label htmlFor="food-calories">Calories:</label>
      <Input 
        id="food-calories" 
        type="number" 
        onChange={handleChange} 
        name="calories" 
      />
      <label htmlFor="food-servings">Servings:</label>
      <Input 
        id="food-servings" 
        type="number" 
        onChange={handleChange} 
        name="servings" 
      />
      <button className="btn btn-primary" type="submit">Add</button>
    </form>
  );
}
