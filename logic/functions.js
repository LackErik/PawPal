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