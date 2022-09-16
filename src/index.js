// @ts-check

const { add, subtract, multiply, divide } = require('./calculator');

/**
 * @file index.js is the root file for this example app
 * @author Arpad G. Bondor
 * @see {@link https://arpadgbondor.github.io/CV|Arpad G. Bondor}
 */

/**
 * Student Name
 * @type {string}
 */
const studentName = 'John Doe';

/**
 * Array of grades
 * @type {Array<number>}
 */
const grades = [98, 97.7, 76, 89];

/**
 * Todo object
 * @type {{id: number|string, text: string}}
 */
const todo = {
    id: 1,
    text: 'Hello',
};

/**
 * Calculate tax
 * @param {number} amount - Total amount
 * @param {number} tax - Tax percentage (10% -> 0.1)
 * @returns {string} - Total with a £ sign
 */
const calculateTax = (amount, tax) => {
    return `£${amount + tax * amount}`;
};

console.log(`Price with tax included: ${calculateTax(100, 0.1)}`);

/**
 * A student
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student name
 * @property {string|number} [age] - Student age (optional)
 * @property {boolean} isActive - Student is active
 */

/**
 * @type {Student}
 */
const student = {
    id: 1,
    name: 'John doe',
    age: 20,
    isActive: true,
};

/**
 * Class to create a person object
 */
class Person {
    /**
     *
     * @param {Object} personInfo - Information about the person
     */
    constructor(personInfo) {
        /**
         * @property {string} name - Person's name
         */
        this.name = personInfo.name;
        /**
         * @property {string|number} age - Person's age
         */
        this.age = personInfo.age;
    }

    /**
     * @property {Function} greet A greeting with the name and age
     * @returns {void}
     */
    greet() {
        console.log(`Hello my name is ${this.name} and I am ${this.age}.`);
    }
}

/**
 * John
 * See {@link Person}
 */
const john = new Person({ name: 'John', age: 20 });
john.greet();
const jane = new Person({ name: 'Jane', age: 16 });
jane.greet();

console.log(`5+8=${add(5, 8)}`);
console.log(`5-8=${subtract(5, 8)}`);
console.log(`5*8=${multiply(5, 8)}`);
console.log(`5/8=${divide(5, 8)}`);
