import styles from './Description.module.css';
import React from 'react';

const RecipeAuthor = () => {
    let authorLink = 'https://pinchofyum.com/'; 
    let authorPhoto = 'https://pinchofyum.com/wp-content/assets/images/sidebar/sidebar-lindsay.jpg'; 
    let authorName = 'Lindsay Ostrom'; 

    return (
        <div className = {styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt = "Photo of the author, Lindsay Ostrom" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Pinch of Yum</a>
            </div>
        </div>
    );
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div> 
                <div>
                    <h1>The Best Easy Pasta Salad</h1>
                    <p>An easy and delicious pasta salad recipe with fresh ingredients!</p>
                </div>
                <RecipeAuthor />
            </div>
        );
    }
}

export default RecipeDescription;