import React, { useState, useEffect } from "react";

const Meal = ({ meal }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=5b3c455d2ba84a1b8770fc817d879a5d&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
        /** id witch is  used in the api function,
         * if don't put it in the didupdate et willunmont
         * the function will trigged request over and over the api until whole possibility:  time allowed to call it by spoonacular.com (to use the api limit)
         * */
      });
  }, [meal.id]);

  return (
    <article>
      <img src={imageUrl} alt="recipe" />
      <h1>{meal.title}</h1>
      <ul className="instructions">
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
      </ul>
      <a href={meal.sourceUrl}>GO To Recipe</a>
    </article>
  );
};

export default Meal;
