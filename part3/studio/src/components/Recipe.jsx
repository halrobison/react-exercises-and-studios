import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://pinchofyum.com/pasta-salad";
   let authorPhoto = "https://pinchofyum.com/wp-content/assets/images/sidebar/sidebar-lindsay.jpg";
   let authorName = "Lindsay Ostrom";

   return (
      <div>
         <img src={authorPhoto} alt = "Photo of author Lindsay" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["pasta", "tomatoes", "mozzarella", "salami", "olives"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1></h1>
            <p></p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://pinchofyum.com/cdn-cgi/image/width=680,height=99999,fit=scale-down/wp-content/uploads/Pasta-Salad-with-Italian-Dressing.jpg" alt="Easy summer pasta salad with olives, tomatoes, salami and mozzarella." className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
