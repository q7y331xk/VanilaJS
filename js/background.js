const backgroundImageArray = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg"];
const selectedBackgroundImage = backgroundImageArray[Math.floor(Math.random() * backgroundImageArray.length)];

document.body.style.backgroundImage = `url("background-img/${selectedBackgroundImage}")`;
/*
const backgroundImageHTML = document.createElement("img");
backgroundImageHTML.src = `background-img/${selectedBackgroundImage}`;
document.body.appendChild(backgroundImageHTML);
*/