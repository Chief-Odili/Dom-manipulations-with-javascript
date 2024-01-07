const heading = document.createElement("h1")
heading.textContent = "WELCOME TO MY JAVASCRIPT DOM RAINBOW WEB PAGE"
heading.style.display = "flex"
heading.style.color = "black"
heading.style.marginTop ="40px"
heading.style.justifyContent ="center"

document.body.appendChild(heading)

document.body.appendChild(document.createElement("br"));

var red_div = document.createElement("div");
red_div.id = "base";
red_div.textContent = "THIS IS RED";
red_div.style.backgroundColor = "red"
red_div.style.display = "flex";
red_div.style.justifyContent = "center";
red_div.style.alignItems = "center";
red_div.style.height = "70px"
document.body.appendChild(red_div)

//document.body.appendChild(document.createElement("br"));

var orange_div = document.createElement("div");
orange_div.id = "base_2";
orange_div.textContent = "THIS IS ORANGE";
orange_div.style.backgroundColor = "orange"
orange_div.style.display = "flex";
orange_div.style.justifyContent = "center";
orange_div.style.alignItems = "center";
orange_div.style.height = "73px"
document.body.appendChild(orange_div)

//document.body.append(document.createElement("br"))

var yellow_div = document.createElement("div");
yellow_div.id = "base_3";
yellow_div.textContent = "THIS IS YELLOW";
yellow_div.style.backgroundColor = "yellow"
yellow_div.style.display = "flex";
yellow_div.style.justifyContent = "center";
yellow_div.style.alignItems = "center";
yellow_div.style.height = "79px"
document.body.appendChild(yellow_div)

//document.body.append(document.createElement("br"))

var green_div = document.createElement("div")
green_div.id = "base_4"
green_div.textContent = "THIS IS GREEN"
green_div.style.backgroundColor ="green"
green_div.style.display ="flex"
green_div.style.justifyContent="center"
green_div.style.alignItems="center"
green_div.style.height="82px"
document.body.appendChild(green_div)

//document.body.append(document.createElement("br"))

var blue_div = document.createElement("div")
blue_div.id = "base_4"
blue_div.textContent = "THIS IS Blue"
blue_div.style.backgroundColor ="BLUE"
blue_div.style.display ="flex"
blue_div.style.justifyContent="center"
blue_div.style.alignItems="center"
blue_div.style.height="85px"
document.body.appendChild(blue_div)

//document.body.append(document.createElement("br"))

var indigo_div = document.createElement("div")
indigo_div.id = "base_4"
indigo_div.textContent = "THIS IS INDIGO"
indigo_div.style.backgroundColor ="indigo"
indigo_div.style.display ="flex"
indigo_div.style.justifyContent="center"
indigo_div.style.alignItems="center"
indigo_div.style.height="88px"
document.body.appendChild(indigo_div)

//document.body.append(document.createElement("br"))

var violet_div = document.createElement("div")
violet_div.id = "base_4"
violet_div.textContent = "THIS IS VIOLET"
violet_div.style.color = "white";
violet_div.style.backgroundColor ="violet"
violet_div.style.display ="flex"
violet_div.style.justifyContent="center"
violet_div.style.alignItems="center"
violet_div.style.height="91px"
document.body.appendChild(violet_div)

//document.body.append(document.createElement("br"))


var footer = document.createElement("footer");

// Get the current year and date
var currentDate = new Date();
var year = currentDate.getFullYear();
var date = currentDate.toDateString();

// Set the content of the footer
footer.textContent = "Chief-Odili "+"© " + year + " - " + date;

// Set styles for the footer (optional)
footer.style.backgroundColor="black"
footer.style.color ="white"
footer.style.textAlign = "center";
footer.style.height ="20px"
footer.style.marginTop = "5px"; // Adjust as needed

// Append the footer to the body of the document
document.body.appendChild(footer);