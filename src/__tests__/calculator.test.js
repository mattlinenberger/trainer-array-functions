import {add} from '../calculator'
import { exportAllDeclaration } from '@babel/types';

describe('calculator',() =>{
//describe the function being tested?
    describe('add',() =>{
        //What the function should return
        it('one plus two should = 3',() =>{
            const result = add(1,2);
            //perform test 
            expect(result).toEqual(3);
        });

        it('five plus five should = 10',() =>{
            const result = add(5,5);
            //perform test 
            expect(result).toEqual(10);
        });

        it('three plus three should = 6',() =>{
            const result = add(3,3);
            //perform test 
            expect(result).toEqual(6);
        });
        it('five plus seven should = 12',() =>{
            const result = add(5,7);
            //perform test 
            expect(result).toEqual(12);
        });
        it('four plus four should = 8',() =>{
            const result = add(4,4);
            //perform test 
            expect(result).toEqual(8);
        });
    });
})
