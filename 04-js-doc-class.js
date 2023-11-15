class Person {
    /**
     * Create a person
     * @param {string} name - name of the person.
     * @param {number} age - the age of the person.
      */

    constructor(name, age){
        /**
         * @type {string}
         * @description The person's name
         */
        this.name = name

        /**
         * @type {number}
         * @description The person's age
         */
        this.age = age
    }

    /**
     * Greet someone
     * @param {string} otherPersonName - Name of the other person to greet
     * @returns {string} A greeting message.
     */
    greet(otherPersonName){
        return `Hello ${otherPersonName}, my name is ${this.name} and I am ${this.age} years old.`
    }
}

const alice = new Person("Alice", 30)
console.log(alice.greet("Bob"))
