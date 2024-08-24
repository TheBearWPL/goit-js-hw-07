const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

function updateName() {
  const inputValue = nameInput.value.trim();
  nameOutput.textContent = inputValue === "" ? "Anonymous" : inputValue;
}
nameInput.addEventListener("input", updateName);
