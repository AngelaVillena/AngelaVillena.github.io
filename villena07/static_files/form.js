const foodname = document.getElementById("fname");
const description = document.getElementById("description");
const imageURL = document.getElementById("ImageURL");
const rank = document.getElementById("Rank");
const submit = document.getElementById("submit");

//this is an array to hold every form submitted by the user
const food = [];

//function method to implement the submit button
const submitCheck = () => {
  if (
    //checks if the input values are valid
    foodname.value == "" ||
    description.value == "" ||
    imageURL.value == "" ||
    rank.value == 0
  ) {
    //alert displays a pop up box if the above statement is true
    alert("Pls fill out all the fields.");
  } else {
    //this section creates the cards which contains the input values
    const cardContainer = document.createElement("div");
    cardContainer.style =
      "background-color: beige; border-radius:8px; width: 500px; padding: 20px; margin-bottom: 20px;";

    //creates a new element to be displayed
    const foodNameElement = document.createElement("h2");
    foodNameElement.innerText = foodname.value;
    foodNameElement.style.marginBottom = "10px";
    foodNameElement.style.textAlign = "center";

    //creates a new element to be displayed
    const descriptionElement = document.createElement("p");
    descriptionElement.style = "text-align: center";
    descriptionElement.innerText = description.value;
    descriptionElement.style.marginBottom = "10px";

    //creates a new element to be displayed
    const imageElement = document.createElement("img");
    imageElement.src = imageURL.value;
    imageElement.style =
      "border-radius: 8px; max-width: 100%; height: auto; width: 100%;";

    //creates the delete button which only shows in every card
    const button = document.createElement("button");
    button.textContent = "Delete";
    button.style.fontFamily = "Arial, Helvetica, sans-serif";
    button.style.letterSpacing = "2px";
    button.style.borderRadius = "8px";
    button.style.height = "30px";
    button.style.width = "80px";
    button.style.marginLeft = "210px";

    //calls the deleteCard function when delete button is clicked
    button.addEventListener("click", () => deleteCard(card));

    //appendChild displays the newly created elements on the cardContainer from the code above
    cardContainer.appendChild(imageElement);
    cardContainer.appendChild(foodNameElement);
    cardContainer.appendChild(descriptionElement);
    cardContainer.appendChild(button);

    //creates a map/dictionary to be added in the "food" array
    //parseInt to make sure the value placed is an integer
    const card = { element: cardContainer, rank: parseInt(rank.value) };

    //pushing the card in the array
    food.push(card);

    //sorts the array by rank
    food.sort((a, b) => {
      return a.rank - b.rank;
    });

    //appends the cardContainers in the food array
    food.forEach((card) => {
      document.body.appendChild(card.element);
    });
  }
};

//deletes card
const deleteCard = (card) => {
  //deletes the cardContainer
  card.element.remove();
  const index = food.findIndex((c) => c === card);
  //splice removes the index and 1 indicates the number of elements to remove
  food.splice(index, 1);
};

submit.addEventListener("click", submitCheck);
