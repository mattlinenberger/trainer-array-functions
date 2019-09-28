/**
 * Import a JSON object. This object is a real response
 * from Reddit's publicly available API.
 * 
 * For more information on Reddit's API:
 * https://www.reddit.com/dev/api
 */
import redditScienceListing from '../data/reddit-api-response.json';

/* let's get the response items */
const items = redditScienceListing.data.children;

/**
 * Update the function to return an array of strings.
 * 
 * The author name is stored in a property: data.author
 * for each listing.
 * 
 * For more information on how to use Array.prototype.map
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const mapItemsToAuthors = () => {
    return items.map((currentItem) => {
        return currentItem.data.author;
    });
};

export const getAllCategories = () => {

    return items.filter((currentItem) => {
        return currentItem.data.category !== null;
    }).map((currentItem) => {
        const {
            category
        } = currentItem.data;
        return category;
    })
};

export const filterItemsByUps = () => {
    const result = items
        //filter returns [] from the condition given.
        .filter((currentItem) => {
            return currentItem.data.ups >= 10 && currentItem.data.ups < 100;
        })
        //map returns a new [].
        .map((currentItem) => {
            return {
                ups: currentItem.data.ups,
                author: currentItem.data.author
            }
        });
    console.log(result);
    return result
}

export const calculateTotalScores = () => {
    return items.reduce((acc, currentItem) => {

        const {
            score: currentScore,
        } = currentItem.data;

        console.log(`currentScore: ${currentScore}, totalScore: ${acc}`);
        return acc + currentScore;
    }, 0);
}

export default {
    mapItemsToAuthors,
}
