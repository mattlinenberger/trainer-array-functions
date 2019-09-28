import {
    mapItemsToAuthors,
    filterItemsByUps,
    calculateTotalScores,
    getAllCategories,
} from '../mapItemsToAuthors';

/* import data for testing */
import redditScienceListing from '../../data/reddit-api-response.json';

/* some test vars */
const numberOfListItems = redditScienceListing.data.children.length;

/**
 * Unit tests
 */

describe('calculateTotalScores', () => {

    it('Should return results > 0', () => {
        const result = calculateTotalScores();
        console.log(`total score is: ${result}`);
        expect(result)
            .toBeGreaterThan(0);
    });
});
describe('getAllCategories', () => {

    it('Should return a array of categories > 0', () => {
        const result = getAllCategories();
        console.log(`categories are: ${result}`);
        expect(result.length)
            .toBeGreaterThan(0);
    });
});

describe('filterItemsByUps', () => {

    it('Ups should return items', () => {
        const result = filterItemsByUps();

        expect(result.length)
            .toBeGreaterThan(0);
    });

});

describe('mapItemsToAuthors() using test data:', () => {
    const result = mapItemsToAuthors();

    test(`should return an array with ${numberOfListItems} items`, () => {
        expect(result.length)
            .toEqual(numberOfListItems);
    });

    test('should return an array with the correct author names', () => {
        const expectedItems = [
            'BringDownTheBaron', 'MistWeaver80',
            'SirT6', 'Dotsconnector',
            'Wagamaga', 'hiepsimatbuon123',
            'mvea', 'blablabl',
            '4ko0oo0o2i7aong3akal', 'Wagamaga',
            'moderndayhermetic', 'rustoo',
            'rustoo', 'tocreatewebsite',
            'Ctown_struggles00', 'MistWeaver80',
            'barcelonaKIZ', 'clib',
            'BuyHighSellNever', 'MistWeaver80',
            'jleisure', 'lurker_bee',
            'Sdgal01', 'Jammmerr',
            'remmind1'
        ];

        expect(result)
            .toEqual(expectedItems);
    });
});