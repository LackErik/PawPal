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