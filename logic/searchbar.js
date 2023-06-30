let searchWords = [];
let dogData = [];
let searchbar = document.querySelector("input");
let resultBox = document.querySelector(".result-box");

function fetchBreedNames(){
    // Lese die JSON-Datei
    console.log("XXX");
    fetch("HundeDaten.json")
    .then(response => response.json())
    .then(data => putWords(data));    

    
    searchbar = document.querySelector("input");
    resultBox = document.querySelector(".result-box");
    searchbar.addEventListener('input', inputFunc);
}



//const searchbar_autocomplete = document.getElementById();

function putWords(data){
    dogData = data;
    data.forEach(dog => {
        searchWords.push(dog.rasse);
    });
}


function inputFunc(){
    console.log("KeyEntered");
    let result = [];
    let input = searchbar.value;
    if(input.length){
        resultBox.style.display = "block";
        result = searchWords.filter((keyword)=>{
           return  keyword.toLowerCase().startsWith(input.toLowerCase());
        });
        console.log(result);
        display(result);
        console.log("result: " + result);

        filterChangByInput(result);

        
    } //Video 14:43 https://www.youtube.com/watch?v=pdyFf1ugVfk
    if(!result.length){
        resultBox.innerHTML = "";
        resultBox.style.display = "none";
        filterChange("A");
    }
}

function display(result){
    let content = result.slice(0,6).map((list) => {
        return "<li onclick=selectInput(this)>" + list + "<li><hr>";
    });
    resultBox.innerHTML = "<ul>"+ content.join("").slice(0, content.lastIndexOf("<")) +"</ul>";
}

function selectInput(list){
    searchbar.value = list.innerHTML;
    resultBox.innerHTML = "";
    resultBox.style.display ="none";

    filterChangByInput([searchbar.value]);
}

function filterChangByInput(filteredDogList){
    var dogCards = document.querySelectorAll(".card");
    console.log("1");
    dogCards.forEach(dogCard => {
        let rasse = dogCard.getElementsByClassName("card-image")[0].querySelector("h3");
        
        if (filteredDogList.includes(rasse.innerHTML)){
            dogCard.classList.add("active");
            dogCard.nextSibling.classList.add("active");
            console.log("11");
        }else{
            dogCard.classList.remove("active");
            dogCard.nextSibling.classList.remove("active");
            console.log("12");
        }
        
    });

}

function filterChange(letter){
    resultBox.innerHTML = "";
    resultBox.style.display = "none";
    
    var dogCards = document.querySelectorAll(".card");
    console.log("1");
    dogCards.forEach(dogCard => {
        
        if (dogCard.classList.contains(letter)){
            dogCard.classList.add("active")
            console.log("11");
        }else{
            dogCard.classList.remove("active");
            console.log("12");
        }
        
    });

    var brS = document.querySelectorAll("br");
    console.log("2");
    brS.forEach(brItem => {
        
        if (brItem.classList.contains(letter)){
            brItem.classList.add("active")
            console.log("21");
        }else{
            brItem.classList.remove("active");
            console.log("22");
        }
        
    });


}