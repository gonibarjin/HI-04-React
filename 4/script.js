const buttonContainer = document.getElementById("buttonContainer");
const buttonChildContainer = document.getElementById("buttonChildContainer");
const Button2 = document.getElementById("button2");
const Button3 = document.getElementById("button3");

buttonContainer.addEventListener("click", (event) => {
  if (!event.target.closest("button")) {
    alert("Container clicked!");
  }
});

buttonChildContainer.addEventListener("click", (event) => {
  if (!event.target.closest("button")) {
    alert("Child container clicked!");
  }
});

Button2.onclick = function () {
  alert("button 2 was clicked! This is a level 0 event handler");
};

Button3.addEventListener("click", function () {
  alert("Button 3 was clicked! This is a level 2 event handler");
});

buttonChildContainer.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    event.stopPropagation();
    if (event.target.id === "button4") {
      alert("Button 4 was clicked! This is an event delegation");
    } else if (event.target.id === "button5") {
      alert("Button 5 was clicked! This is also an event delegation");
    }
  }
});
