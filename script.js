"use strict";

// Starting array -----------------------------------
const submissions = [
  {
    name: "Jane",
    score: 95,
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    passed: true,
  },
];

// END -------------------------------------------------

const addSubmission = (array, newName, newScore) => {
  const newSubmission = { name: newName, score: newScore };

  if (newScore >= 60) {
    newSubmission.passed = true;
  } else {
    newSubmission.passed = false;
  }
  array.push(newSubmission);
};

addSubmission(submissions, "Kween", 40);
console.log(submissions);

// DELETE ------------------------------------------------

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

deleteSubmissionByIndex(submissions, 3);
console.log(submissions);

// DELETE (by name) ------------------------------------------

const deleteSubmissionByName = (array, name) => {
  const foundIndex = array.findIndex((item) => {
    return item.name === name;
  });

  if (foundIndex !== -1) {
    array.splice(foundIndex, 1);
  }
};

deleteSubmissionByName(submissions, "Joe");
console.log(submissions);

// UPDATE SCORE ----------------------------------------

const editSubmission = (array, index, score) => {
  array[index].score = score;
  if (score >= 60) {
    array[index].passed = true;
  } else {
    array[index].passed = false;
  }
};

editSubmission(submissions, 0, 30);
console.log(submissions);
