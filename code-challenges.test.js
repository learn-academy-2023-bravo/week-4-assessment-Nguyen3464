// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("rfiShuffles", () => {
  const colors1 = ["purple", "blue", "green", "yellow", "pink"]
  // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
  const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"
  ]
  // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
  it("return an array whos content is a subset of the incoming array with the first item removed and the remaining content shuffled", () => {
    expect(rfiShuffles(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    expect(rfiShuffles(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
  })
})

/* 

FAIL  ./code-challenges.test.js
rfiShuffles
  ✕ return an array whos content is not a subset of the incoming array with the first item removed and the remaining content shuffled

● rfiShuffles › return an array whos content is not a subset of the incoming array with the first item removed and the remaining content shuffled

  ReferenceError: rfiShuffles is not defined

*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// b) Create the function that makes the test pass.
  
/*
Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.
Pseudocode: 1.) Create a function called rfiShuffle
2.) rfiShuffle will take an array as an argument
3.) use .shift() to remove the first item from the array
4.) use .sort() to sort through the array
5.) use Math.random() - 0.5 to shuffle the array.  Math.random() - 0.5 returns a positive and negative numbers which alternates when accessing the index passing through .sort() 

*/

  // const colors1 = ["purple", "blue", "green", "yellow", "pink"]
  // // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
  // const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
  // // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

  const rfiShuffles = (array) => {
      array.shift()
      return array.sort(() => Math.random() - 0.5);
  }

/*

 PASS  ./code-challenges.test.js
  rfiShuffles
    ✓ return an array whos content is not a subset of the incoming array with the first item removed and the remaining content shuffled (2 ms)

*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

describe("talliedVotes", () => {
  const votes1 = { upVotes: 13, downVotes: 2 }
  // Expected output: 11
  const votes2 = { upVotes: 2, downVotes: 33 }
  // Expected output: -31
  it("return the number of votes tallied", () => {
    expect(talliedVotes(votes1)).toEqual(11)
    expect(talliedVotes(votes2)).toEqual(-31)
  })
})

/*

FAIL  ./code-challenges.test.js
rfiShuffles
  ✓ return an array whos content is a subset of the incoming array with the first item removed and the remaining content shuffled (1 ms)
talliedVotes
  ✕ return the number of votes tallied (1 ms)

● talliedVotes › return the number of votes tallied

  ReferenceError: talliedVotes is not defined

  */

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// b) Create the function that makes the test pass.

/*

Pseudocode: 1.) Create a function called talliedVotes
2.) talliedVotes will take in an object as an argument
3.) use dotNotation to access object's key's value
4.) subtract upVotes value from downVotes value
5.) return tallied votes

*/

// const votes1 = { upVotes: 13, downVotes: 2 }
// // Expected output: 11
// const votes2 = { upVotes: 2, downVotes: 33 }
// // Expected output: -31

const talliedVotes = (votes) => {
  return votes.upVotes - votes.downVotes
}

/*

 PASS  ./code-challenges.test.js
  talliedVotes
    ✓ return the number of votes tallied (1 ms)

*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("noDups", () => {
  const dataArray1 = ["array", "object", "number", "string", "Boolean"]
  const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
  // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
  it("return an array with no duplicate values", () => {
    expect(noDups(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})

/*

 FAIL  ./code-challenges.test.js
  rfiShuffles
    ✓ return an array whos content is a subset of the incoming array with the first item removed and the remaining content shuffled (1 ms)
  talliedVotes
    ✓ return the number of votes tallied
  noDups
    ✕ return an array with no duplicate values (1 ms)

  ● noDups › return an array with no duplicate values

    ReferenceError: noDups is not defined

  */

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// b) Create the function that makes the test pass.

/*

Pseudocode: 1.) Create an function called noDups
2.) noDups will take in two arrays as arguments
3.) use the ... spread operator to make deep copies of the dataArray1 and dataArray2, then store them in combinedArray variable
4.) use ...new Set to create a deep copy of combinedArray and store it in filteredArray.  ...new Set only allows a value to occur once in the copy and will fill filter out duplicate values in combinedArray.
5.) return filteredArray

*/

// const dataArray1 = ["array", "object", "number", "string", "Boolean"]
// const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]


const noDups = (array1, array2) => {
  
  let combinedArray = [...array1, ...array2];
  return [...new Set(combinedArray)];
}

console.log(noDups(dataArray1, dataArray2))

/*

PASS  ./code-challenges.test.js
rfiShuffles
  ✓ return an array whos content is a subset of the incoming array with the first item removed and the remaining content shuffled (1 ms)
talliedVotes
  ✓ return the number of votes tallied (1 ms)
noDups
  ✓ return an array with no duplicate values

  */
