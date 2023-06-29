
let dogs = [];

function fetchOverview(){
    // Lese die JSON-Datei
    fetch("HundeDaten.json")
    .then(response => response.json())
    .then(data => generateDogCards(data));

    //dogCardsContainer.appendChild(item3);


}

// Generiere die Karten für die Hunde
function generateDogCards(dogs) {
    const dogCardsContainer = document.getElementById('dogCardsContainer');
    const item3 = document.createElement("div");

    

    // Iteriere über die Hunde und generiere eine Karte für jeden Hund
    dogs.forEach(dog => {
        const card = document.createElement('div');
        card.classList.add("question_block");
        card.setAttribute("id", "question7");
        card.classList.add('card'); // Füge eine CSS-Klasse für das Styling hinzu

        const cardImage = document.createElement('div');
        cardImage.classList.add("card-image");
        card.appendChild(cardImage);
        
        /*
        const cardMiddle = document.createElement('div');
        cardMiddle.classList.add("card-middle");
        card.appendChild(cardMiddle);
        */

        const cardContent = document.createElement('div');
        cardContent.classList.add("card-content");
        card.appendChild(cardContent);

        const br = document.createElement("br");
        
       

        const img = document.createElement("img");
        img.setAttribute("src", "/undraw_dog_c7i6.svg");
        cardImage.appendChild(img);
        

        // Füge die Eigenschaften des Hundes zur Karte hinzu
        const rasse = document.createElement('h3');
        rasse.textContent = dog.rasse;
        if(dog.rasse[0] === "Ä"){
            card.classList.add("A");
            br.classList.add("A");
        }else if (dog.rasse[0] === "Ö") {
            card.classList.add("O");
            br.classList.add("O");

        } else if(dog.rasse[0] === "Ü"){
            card.classList.add("U");
            br.classList.add("U");

        }else{
            card.classList.add(dog.rasse[0]);
            br.classList.add(dog.rasse[0]);

        }
        cardImage.appendChild(rasse);

        const groesse = document.createElement('p');
        groesse.textContent = " Hundegröße: " + dog.groesse + " (" + dog.hoehe + ")";
        cardContent.appendChild(groesse);

        const fell = document.createElement('p');
        let fellpflege = "";
        switch( parseInt(dog.fellPflege)){
            case 25: 
                fellpflege = "leichte Fellpflege";
                break;
            case 50: 
                fellpflege = "mittlere Fellpflege";
                break;
            case 75: 
                fellpflege = "starke Fellpflege";
                break;
        }
        fell.textContent = "Fell: " + dog.fell + ", " + fellpflege;
        cardContent.appendChild(fell);

        /*const fellpflege = document.createElement('h3');
        fellpflege.textContent = dog.fellpflege;
        cardContent.appendChild(fellpflege);
        */
        const gewicht = document.createElement('p');
        gewicht.textContent = "Gewicht: " + dog.gewicht;
        cardContent.appendChild(gewicht);

        const energielevel = document.createElement('p');
        let energielvl = "";
        switch(parseInt(dog.energielevel)){
            case 25: 
                energielvl = "Gering";
                break;
            case 50: 
                energielvl = "Durchschnittlich";
                break;
            case 75: 
                energielvl = "Energisch";
                break;
        }
        energielevel.textContent = "Bewegungsdrang: " + energielvl;
        cardContent.appendChild(energielevel);

        const alter = document.createElement('p');
        alter.textContent ="Lebenserwartung: " + dog.alter;
        cardContent.appendChild(alter);

        const wesen = document.createElement('p');
        wesen.textContent = "Charakter: " + dog.wesen;
        cardContent.appendChild(wesen);


        // Füge die Karte zum Container hinzu
        
        dogCardsContainer.appendChild(card);
        dogCardsContainer.appendChild(br);
        
    });

    filterChange("A");
}



function filterChange(letter){
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