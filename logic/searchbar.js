let searchWords = [];

function fetchBreedNames(){
    // Lese die JSON-Datei
    fetch("HundeDaten.json")
    .then(response => response.json())
    .then(data => generateDogCards(data));    

    data.forEach(dog => {
        searchWords.push(dog.rasse);
    });
}


const searchbar = document.getElementById("searchbar");
const searchbar_autocomplete = document.getElementById();

searchbar.onkeyup = function(){
    let result = [];
    let input = searchbar.value;
    if(input.length){
        result = searchWords.filter();
    } //Video 14:43 https://www.youtube.com/watch?v=pdyFf1ugVfk
}