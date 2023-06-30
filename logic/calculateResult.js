

let groesse = [localStorage.getItem("groesse"), 0];
let house = [localStorage.getItem("house"), 1];
let walking = [localStorage.getItem("walking"), 2];
let friendly = [localStorage.getItem("friendly"), 3];
let fell = [localStorage.getItem("fell"), 4];
let fellpflege = [localStorage.getItem("fellpflege"), 5];

let training = [localStorage.getItem("trainierbar"), 6];

//Cases: 0) No result, 1) >=1 Result, 2) error, 9) lazy ass answer
let resultCase = 2;

let answerToPicky = -1; //speichert bei welcher Frage alle Hunde ausgeschieden sind




//berechnet das Ergebnis
function result(){
    fetch("HundeDaten.json")
        .then(response => response.json())
        .then(data => calculateResult(data));


        function calculateResult(dogList){
            let firstCard = document.getElementById("question7");
            firstCard.style.display = "block";

            let titleHeadline = document.getElementById("titleHeadline");
            titleHeadline.innerHTML = "PAWPAL";

            answerToPicky = -1;

            resultCase = 2 
            //let answerToPickyResult = -1; //speichert bei welcher Frage alle Hunde ausgeschieden sind
            
            let msgText = document.getElementById("question_Text");
            console.log(msgText);
            if(parseInt(walking) == 0 && parseInt(house) == 0){
                resultCase = 9;
                msgText.innerHTML = "Du scheinst nicht genug Kapazitäten für einen<br/>Hund zu haben. <br/><br/> Ein Hund braucht sehr viel Auslauf und möchte<br/> gerne etwas von der Welt sehen. <br/><br/> Bitte überlege, ob du einem Hund wirklich das <br/>Zuhause bieten kannst, dass er verdient."

            }else{
        
                dogList = fetchDogList(groesse, dogList);
                
                dogList = fetchDogList(walking, dogList[0]);
                
                dogList = fetchDogList(friendly, dogList[0]);
                
                dogList = fetchDogList(fell, dogList[0]);
                
                dogList = fetchDogList(fellpflege, dogList[0]);
                
                dogList = fetchDogList(training, dogList[0]);
                
                if(answerToPicky != -1){
                    console.log(answerToPicky);
                    resultCase = 0
                    let pickyFrage = "";
                    switch(answerToPicky){
                        case 0:
                            pickyFrage = "der Größe";
                            break;
                        case 2:
                            pickyFrage = "der Gassi Kapazität";
                            break;
                        case 3:
                            pickyFrage = "der Kinder Eignung";
                            break;
                        case 4:
                            pickyFrage = "der Felllänge";
                            break;
                        case 5:
                            pickyFrage = "der Fellpflege Kapazität";
                            break;
                        case 6:
                            pickyFrage = "der Trainingskapazität";
                            break;
                    }
                    msgText.innerHTML = "Leider konnten wir keinen Hund für dich finden.. <br/>Deinem Wunsch " + pickyFrage + " entsprachen<br/>leider keine Hunde mehr.<br/><br/>Versuche doch nochmal diesen oder ein paar der<br/>anderen Wünsche zu verändern!<br/><br/> Es gibt sicherlich einen Hund der<br/>schon auf dich wartet! ♥";
                    console.log(dogList);
                }else{
                    resultCase = 1;
                    console.log(dogList);

                    
                    firstCard.style.display = "none";
                    if(dogList.length >1){
                        titleHeadline.innerHTML = "Diese Hunde passen zu dir:"
                    }else{
                        titleHeadline.innerHTML = "Dieser Hund passt zu dir:"
                    }
                    
                    generateDogCards(dogList[0]);
                }                    
            
            }
            var brArray = Array.from(document.querySelectorAll('br'));

            brArray.forEach(function(brk, idx) {
            brk.style.display = 'block';
});
        }

    }






//Diese Funktion filtert die Liste passend zur Antwort und gibt eine neue Liste zurück
function fetchDogList(value , dogList){
    
    let newDogList = [];
    
    

    switch(value[1]){
        case 0:
            dogList.forEach(dog => {
                let groesse = 0;
                switch(dog.groesse){
                    case "Klein":
                        groesse = 25;
                        break;
                    case "Mittel":
                        groesse = 50;
                        break;
                    case "Groß":
                        groesse = 75;
                        break;
                }
                if(groesse == parseInt(value[0])){
                    newDogList.push(dog);
                }
                
            });

            checkIfAnswerToPicky(dogList, newDogList, value[1]);
            
            break;

        case 1:
            /*dogList.forEach(dog => {
                if(parseInt(dog.groesse) == parseInt(value[0])){
                    newDogList.push(dog);
                }
            });

            checkIfAnswerToPicky(dogList, newDogList, value);
            */
            break;

        case 2:
            dogList.forEach(dog => {
                if(parseInt(dog.energielevel) == parseInt(value[0])){
                    newDogList.push(dog);
                }
            });
            
            checkIfAnswerToPicky(dogList, newDogList, value[1]);

            break;

        case 3:
            dogList.forEach(dog => {
                if(parseInt(dog.kinder) >= (parseInt(value[0]) * 75)){
                    newDogList.push(dog);
                }
            });
            
            checkIfAnswerToPicky(dogList, newDogList, value[1]);

            break;

        case 4:
            dogList.forEach(dog => {
                let fell = -1;
                switch(dog.fell){
                    case "Kurzhaar":
                        fell = 25;
                        break;
                    case "Mittelhaar":
                        fell = 50;
                        break;
                    case "Langhaar":
                        fell = 75;
                        break;
                }
                
                if(fell == parseInt(value[0])){
                    newDogList.push(dog);
                }
            });
            
            checkIfAnswerToPicky(dogList, newDogList, value[1]);

            break;

        case 5:
            dogList.forEach(dog => {
                console.log(dog.fellPflege);
                if(parseInt(dog.fellPflege) <= parseInt(value[0])){
                    newDogList.push(dog);
                }
            });
            
            checkIfAnswerToPicky(dogList, newDogList, value[1]);

            break;

        case 6:
            dogList.forEach(dog => {
                if(parseInt(dog.trainierbar) >= 100 - parseInt(value[0])){
                    newDogList.push(dog);
                }
            });
            
            checkIfAnswerToPicky(dogList, newDogList, value[1]);

            break;
    }

    return [newDogList, answerToPicky];
}

//Diese Funktion prüft, ob die Antwort alle Hunde ausgeschlossen hat
//und speichert, welche Antwort es war
function checkIfAnswerToPicky(oldDogList, newDogList, value_number){
    if(oldDogList != 0 && newDogList.length == 0){
        answerToPicky = value_number;
    }

    
}

/*
function getAnswerToPicky(answerToPicky){
    if(answerToPicky != -1){
        return answerToPicky;
    }
}*/

// Generiere die Karten für die Hunde
function generateDogCards(dogs) {
    const dogCardsContainer = document.getElementById('dogCardsContainer');
    console.log(dogCardsContainer);
    const item3 = document.createElement("div");

    

    // Iteriere über die Hunde und generiere eine Karte für jeden Hund
    dogs.forEach(dog => {
        const card = document.createElement('div');
        card.classList.add("question_block");
        card.setAttribute("id", "question7");
        card.classList.add('card'); // Füge eine CSS-Klasse für das Styling hinzu
        card.classList.add("active")

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
        br.classList.add("active")
       

        const img = document.createElement("img");
        img.setAttribute("src", "/undraw_dog_c7i6.svg");
        cardImage.appendChild(img);

        const br2 = document.createElement("br");
        br2.classList.add("active")
        cardImage.appendChild(br2);
        

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
}

