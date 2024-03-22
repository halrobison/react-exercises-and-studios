import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {
         "label": 'Chicken Recipes',
         "value": 'Chicken Recipes'
      }, 
      {
         "label": 'Beef Recipes',
         "value": 'Beef Recipes'
      }, 
      {
         "label": 'Veggie Recipes',
         "value": 'Veggie Recipes'
      }
   ];

   const mappedBoards = boards.map((board) => (<option value={board.value}>{board.label}</option>));

   const [boardName, setName] = useState('No boards yet!');

   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {mappedBoards}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
