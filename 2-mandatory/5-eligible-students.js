/*
  Only students who have attended enough classes are eligible to sit an exam.

  Create a function which:
  - Accepts an array which contains all the students' names and their attendance counts
    (see tests to confirm how this data will be structured)
  - Returns an array containing only the names of the who have attended AT LEAST 8 classes
*/

function getEligibleStudents(array) {
  return array.filter(element => element[1] >= 8)
              .map(element => element[0]);

  // return array.filter(element => {
  //   if (element[1] >= 8) {
  //     return element[0];
  //   } else
  // })
  // ^ i want to be able to do this ALL within filter... HELP ???
}

// console.log(getEligibleStudents([["Ahmed", 8],["Clement", 10],["Elamin", 6],["Adam", 7],["Tayoa", 11],["Nina", 10]]));
// ["Ahmed","Clement","Tayoa","Nina"]


/* ======= TESTS - DO NOT MODIFY ===== */

test("getEligibleStudents function works", () => {
  const attendance = [
    ["Ahmed", 8],
    ["Clement", 10],
    ["Elamin", 6],
    ["Adam", 7],
    ["Tayoa", 11],
    ["Nina", 10],
  ];
  expect(getEligibleStudents(attendance)).toEqual([
    "Ahmed",
    "Clement",
    "Tayoa",
    "Nina",
  ]);
});

test("getEligibleStudents function can return empty array", () => {
  const attendance = [["Jacob", 7]];
  expect(getEligibleStudents(attendance)).toEqual([]);
});
