function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function handleClick() {
  const body = document.querySelector("body");
  const spanColor = document.querySelector(".color");
  const newColor = getRandomHexColor();
  console.log(newColor);

  body.style.backgroundColor = newColor;
  spanColor.textContent = newColor;
}

document.querySelector(".change-color").addEventListener("click", handleClick);
