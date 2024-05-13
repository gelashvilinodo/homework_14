let title = document.querySelector(".title");
title.textContent = "ვენეცია";
title.className = "titleStyles";

let text = document.querySelector(".text");
text.textContent =
  "ვენეცია ვენეტოს რეგიონის დედაქალია. სახელი მომდინარეობს აქ მაცხოვრებელი ანტიკური პერიოდის ხალხისგან, რომლებსაც ვენეტები ეწოდებოდათ.";
text.style.color = "brown";
text.style.fontSize = "26px";

let parentDiv = document.querySelector(".box");
let childDiv = document.createElement("div");
parentDiv.appendChild(childDiv);
childDiv.style.width = "300px";
childDiv.style.height = "300px";
childDiv.style.borderRadius = "50%";
// ანიმაციის დასანახად დივს დავამატე ზედა ბორდერი
childDiv.style.borderTop = "3px solid red";
childDiv.style.backgroundColor = "yellow";

childDiv.addEventListener("mouseover", function () {
  childDiv.style.backgroundColor = "blue";
});

childDiv.addEventListener("mouseout", function () {
  childDiv.style.backgroundColor = "yellow";
});

let button = document.createElement("button");
parentDiv.appendChild(button);
button.textContent = "DELETE CIRCLE";
button.className = "buttonStyles";

button.addEventListener("click", function () {
  if (button.textContent == "DELETE CIRCLE") {
    childDiv.style.display = "none";
    button.textContent = "RETURN CIRCLE";
    button.style.backgroundColor = "green";
  } else {
    childDiv.style.display = "block";
    button.textContent = "DELETE CIRCLE";
    button.style.backgroundColor = "red";
  }
});

childDiv.className = "ForAnimation";
document.addEventListener("keydown", (ev) => {
  if (ev.key == "Enter") {
    childDiv.style.animation = "rotation 2s linear";
  }
});

// დივი რატო ტრიალებს ღილაკზე კლიკის დროსაც ეგ არ ვიცი :D
