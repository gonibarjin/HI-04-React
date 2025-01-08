// Base URL
const apiUrl = "https://api.sampleapis.com/coffee/hot";

// Function to make a GET request using
// TODO: 1. find the error and fix it, 2. finish the function
function fetchData(url) {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("The fetch did not work as intended", error);
    });
}

fetchData(apiUrl);

// Function to make a POST request
// TODO: Implement the function
function postData(url, data) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error", error));
}

const dataToPost = {
  title: "Coffee Name",
  description: "A great coffee",
  ingredients: ["coffee", "milk", "sugar"],
  image: "coffee_image_url",
  id: 123,
};

postData(apiUrl, dataToPost);
