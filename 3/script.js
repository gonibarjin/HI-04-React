const body = document.querySelector("body");
const form = document.querySelector("form");
const labels = document.querySelectorAll("label");
const requiredLabels = document.querySelectorAll(
  "label:has(~ input:is(:required))"
);
const inlineInputs = document.querySelectorAll(
  'input[type="text"], input[type="email"], input[type="tel"]'
);
const newContents = [
  "Enter your name",
  "Enter your email",
  "Enter your phone number",
  "Enter a message if needed",
  "Please pick an options",
];
const inputsWithBorders = document.querySelectorAll("input, textarea");
const textareas = document.querySelectorAll("textarea");
const submitButton = document.querySelector('input[type="submit"]');

body.style.backgroundColor = "Wheat";
body.style.color = "Maroon";
body.style.fontSize = "16px";
body.style.display = "flex";
body.style.alignItems = "center";
body.style.justifyContent = "center";
body.style.fontFamily = "sans-serif";
body.style.minHeight = "100svh";
body.style.margin = 0;

form.style.border = "3px solid Maroon";
form.style.padding = "1rem";

labels.forEach((label, index) => {
  if (index < newContents.length) {
    label.innerHTML = newContents[index];
  }
});

inlineInputs.forEach((input) => {
  input.style.display = "block";
  input.style.width = "100%";
});

inputsWithBorders.forEach((input) => {
  input.style.border = "1px solid grey";
  input.style.borderRadius = "20px";
  input.style.marginBlock = "0.125rem 0";
  input.style.padding = "0.5ch";
});

textareas.forEach((textarea) => {
  textarea.style.resize = "none";
});

submitButton.style.cursor = "pointer";
submitButton.style.marginBlock = "0";
submitButton.style.width = "100%";
submitButton.style.fontSize = "16px";
submitButton.style.padding = "10px 0";
submitButton.style.border = "none";
