function speichernAntwort1() {
  var radioButtons = document.getElementsByName("option");
    
    for (var i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
        ausgewählterWert = radioButtons[i].value;
        localStorage.setItem("antwort1", ausgewählterWert);
        document.getElementById("demo").innerHTML = localStorage.getItem('antwort1');
        break;
      }
    }

    if (ausgewählterWert !== "") {
      console.log(ausgewählterWert); // Zeigt den ausgewählten Wert im Browser-Konsolenfenster an
      // Hier kannst du weitere Aktionen mit dem ausgewählten Wert durchführen
    } else {
      document.getElementById("demo").innerHTML = "Bitte wähle eine Option aus.";
      console.log("Bitte wähle eine Option aus.");
    }
    
    

  }

  function changeColor(buttonId) {
    
    var buttons = document.querySelectorAll('.button-bar button');
    var line = document.querySelector('.button-bar .line');
  
    for (var i = 0; i < buttons.length; i++) {
      if (i < buttonId) {
        buttons[i].classList.add('active');
      } else {
        buttons[i].classList.remove('active');
      }
    }
  
    var widthPercentage = (buttonId - 1) / (buttons.length - 1) * 100;
    line.style.width = `${widthPercentage}%`;
    //line.style.backgroundColor = ''; // Ändern Sie die Hintergrundfarbe hier
    line.classList.add('active');
  }

  function imgcolor(button) {
    
      var buttons = document.querySelectorAll('.img_button');
    
      //const buttons = document.getElementsByTagName('button');
  
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i] === button) {
      buttons[i].classList.add('active');
    } else {
      buttons[i].classList.remove('active');
    }
  }
  }

  function auswahlSpeichern(thema, ausgewaehlteOption) {

       // Anzeigen des Weiter-Buttons
       var weiterButton = document.getElementById('button_nextquestion');
       weiterButton.style.display = 'block';
      // Speichern der ausgewählten Option, z. B. in einer Variablen oder in Local Storage
      localStorage.setItem(thema, ausgewaehlteOption);
      document.getElementById("demo").innerHTML = localStorage.getItem(thema) + " " + localStorage.getItem(ausgewaehlteOption);

  }

  let currentIndex = 0;
  function nextquestionaktivate(){
    const blocks = document.querySelectorAll('.question_block');
   

      if (currentIndex < blocks.length - 1) {
        blocks[currentIndex].style.display = 'none';
        currentIndex++;
        blocks[currentIndex].style.display = 'block';
      }

      document.getElementById("buttoncounter").innerHTML = currentIndex;

  }
  function anzeigen(){
    var stats = "hi";
    stats += "Größe: " + localStorage.getItem('groesse');
    stats += "Haus: " + localStorage.getItem('house');
    stats += "Gassi: " + localStorage.getItem('walking');
    stats += "PC?: " + localStorage.getItem('friendly');
    stats += "Felllänge: " + localStorage.getItem('fell');
    stats += "Fellpflege: " + localStorage.getItem('fellpflege');
    stats += "Größe: " + localStorage.getItem('groesse');
    document.getElementById("demo").innerHTML = stats;
  }