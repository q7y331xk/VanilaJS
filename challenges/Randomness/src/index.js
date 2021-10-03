const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

function selectColor() {
  return (colors[Math.floor(Math.random() * 18)]);
}
function showColor(color1,color2) {
  document.body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;

}

function listener() {
  const color1 = selectColor();
  const color2 = selectColor();
  showColor(color1,color2);
}

document.getElementsByTagName("button")[0].addEventListener("click",listener);