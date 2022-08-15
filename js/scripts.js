window.addEventListener("load", function(event){
  event.preventDefault();
  const submit = document.getElementById("submit-button");
  submit.addEventListener("click", handleSubmission);

});

function handleSubmission(event){
  event.preventDefault();
  //gets the input values
  //
  const favFood = document.getElementById("food").value.toLowerCase();
  const favAnimal = document.getElementById("animal").value.toLowerCase();
  const favColor = document.getElementById("color").value.toLowerCase();
  const favShow = document.getElementById("show").value.toLowerCase();
  console.log (favFood, favAnimal, favColor, favShow);

  const favorites = [favFood, favAnimal, favColor, favShow];
  console.log(favorites);
};