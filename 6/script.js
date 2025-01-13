// TODO: Set item in localStorage
localStorage.setItem("username", "gonibarjin");

// TODO: Get item from localStorage
const username = localStorage.getItem("username");
console.log(username);

// TODO: Remove item from localStorage
localStorage.removeItem("username");

// TODO: Clear all items from localStorage
localStorage.clear();

// TODO: Add an object to localStorage
const person = {
  name: "merri",
  age: 26,
  hobby: "padel",
};
localStorage.setItem("person", JSON.stringify(person));

// TODO: Get an object from localStorage
const personInStoragelocalStorage = localStorage.getItem("person");
const parsedPerson = JSON.parse(personInStoragelocalStorage);
console.log(parsedPerson);

// TODO: Set item in sessionStorage
sessionStorage.setItem("car", "bmw");

// TODO: Get item from sessionStorage
const car = sessionStorage.getItem("car");

// TODO: Remove item from sessionStorage
sessionStorage.removeItem("car");

// TODO: Clear all items from sessionStorage
sessionStorage.clear();

// TODO: Add an object to sessionStorage
const myComputer = {
  gpu: "4060 ti",
  cpu: "R5 7600",
  ram: "32gb",
};
sessionStorage.setItem("computer", JSON.stringify(myComputer));

// TODO: Get an object from sessionStorage
const computerFromStorage = sessionStorage.getItem("computer");
const parsedComputer = JSON.parse(computerFromStorage);
console.log(parsedComputer);
