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
      <img
        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGMzYzNjsiIGQ9Ik0zNzYuOTUxLDI4LjUwN2gtMC44OTljLTY2LjAyNywwLTEwMi45NDIsNDguMzItMTIwLjA0OSw4MS4wMzMNCgljLTE3LjQwOC0zMi43MTQtNTQuMDIyLTgxLjAzMy0xMjAuMDQ5LTgxLjAzM2gtMS4xOTlDNjMuMzI0LDI5LjEwOCwzLjc5Miw5MC4wMzIsMC4xOTEsMTY3LjE2NA0KCWMtNC41MDMsOTQuNTM4LDcwLjkzNywxNTguMTY0LDE4My43ODIsMjU0LjIwNGMxOS41MDksMTYuODA3LDQwLjIxOCwzNC41MTUsNjIuMTI2LDUzLjQyM2w5LjkwNSw4LjcwM2w5LjkwNS04LjcwMw0KCWMyMS42MDgtMTguOTA4LDQyLjYxNy0zNi42MTYsNjIuMTI2LTUzLjQyM2MxMTIuODQ0LTk2LjA0LDE4OC4yNzgtMTU5LjY2NiwxODMuNzc1LTI1NC4yMDQNCglDNTA4LjIwNiw5MC4wMzEsNDQ4LjM4MSwyOS4xMDcsMzc2Ljk1MSwyOC41MDd6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRjQwMDAwOyIgZD0iTTUxMS44MDgsMTY3LjE2NGM0LjUwMyw5NC41MzgtNzAuOTMsMTU4LjE2NC0xODMuNzc1LDI1NC4yMDQNCgljLTE5LjUwOSwxNi44MDctNDAuNTE4LDM0LjUxNS02Mi4xMjYsNTMuNDIzbC05LjkwNSw4LjcwM1YxMDkuNTRjMTcuMTA3LTMyLjcxNCw1NC4wMjItODEuMDMzLDEyMC4wNDktODEuMDMzaDAuODk5DQoJQzQ0OC4zODEsMjkuMTA3LDUwOC4yMDYsOTAuMDMxLDUxMS44MDgsMTY3LjE2NHoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
        className="heart"
      />
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
