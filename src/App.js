import React, { useState } from "react";
import MealList from "./MealList";
import "./App.css";

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  var handleChange = (e) => {
    setCalories(e.target.value);
  };

  /*  apiKey=5b3c455d2ba84a1b8770fc817d879a5d */
  var getMealData = () => {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=5b3c455d2ba84a1b8770fc817d879a5d&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  };

  return (
    <div className="App">
      <section className="controls">
        <input
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
        />
      </section>
      <button onClick={getMealData}>Get Daily Meal Plan</button>
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
}

export default App;
