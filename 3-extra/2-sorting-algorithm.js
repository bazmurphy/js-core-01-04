/*
At the start of the course, you worked in teams to sort your team members, labelled by
numbers, in ascending or descending order.

Today, you will be applying the sorting algorithm you used in that exercise in code! 

Create a function called sortAges which:
- takes an array of mixed data types as input
- removes any non-number data types without using the built-in javascript filter method
- returns an array of sorted ages in ascending order 
  - HARD MODE - without using the built-in javascript sort method 😎

You don't have to worry about making this algorithm work fast! The idea is to get you to
"think" like a computer and practice your knowledge of basic JavaScript.
*/

function sortAges(arr) {
  // return arr.filter(element => typeof element === "number")
  //           .sort((elementOne, elementTwo) => elementOne - elementTwo);

  let sortArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") (
      sortArray.push(arr[i])
    )
  }

  for (let i = 0; i < sortArray.length; i++) {
    for (let j = 0; j < sortArray.length; j++) {
      if (sortArray[j] > sortArray[j+1]) {
        let temporary = sortArray[j]
        sortArray[j] = sortArray[j+1];
        sortArray[j + 1] = temporary;
      }
    }
  }
  
  return sortArray;

}

// console.log(sortAges(["🎹",100,"💩",55,"🥵","🙈",45,"🍕","Sanyia",66,"James",23,"🎖","Ismeal"]));
// [23, 45, 55, 66, 100]
// console.log(sortAges(["28", 100, 60, 55, "75", "🍕", "Elamin"]));
// [55, 60, 100]

/* ======= TESTS - DO NOT MODIFY ===== */

const agesCase1 = [
  "🎹",
  100,
  "💩",
  55,
  "🥵",
  "🙈",
  45,
  "🍕",
  "Sanyia",
  66,
  "James",
  23,
  "🎖",
  "Ismeal",
];
const agesCase2 = ["28", 100, 60, 55, "75", "🍕", "Elamin"];

test("sortAges function works - case 1", () => {
  expect(sortAges(agesCase1)).toEqual([23, 45, 55, 66, 100]);
});

test("sortAges function works - case 2", () => {
  expect(sortAges(agesCase2)).toEqual([55, 60, 100]);
});
