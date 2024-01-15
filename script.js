//Array für die vorzeichen festlegen und vorzeichen den jeweiligen knöpfen zuweisen

const vorzeichen = ["+", "-", "*", "/", "."];
document.getElementById("plus-btn").value = vorzeichen[0];
document.getElementById("minus-btn").value = vorzeichen[1];
document.getElementById("multiplikation-btn").value = vorzeichen[2];
document.getElementById("division-btn").value = vorzeichen[3];
document.getElementById("komma-btn").value = vorzeichen[4];
const userInput = document.getElementById("anzeige");


function update(value) 
{
  document.getElementById("anzeige").value = value;
};


//Neuer wert wird zugewiesen bei der auswahl eines inputs
function newValue(value)
{
document.getElementById("anzeige").value += value;
};


//Anzeige wird zurück gesetzt mit der betätigung von AC
function reset()
{
  document.getElementById("anzeige").value = " ";
};


//Man kann das zuletzt eingegebene zeichen löschen
function zurück() {
  var currentDisplay = document.getElementById("anzeige").value;
  document.getElementById("anzeige").value = currentDisplay.slice(0, -1);
};



//Berechnet die werte innerhalb der anzeige
function calculateResult() {
  try {
    const result = eval(document.getElementById('anzeige').value);
    document.getElementById('anzeige').value = result;
  } catch (error) {
    document.getElementById('anzeige').value = 'Error';
  }
};
