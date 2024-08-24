const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(registerForm);
  const data = {};

  formData.forEach((value, name) => {
    data[name] = value.trim();
  });

  if (Object.values(data).some((value) => value === "")) {
    alert("All form fields must be filled in");
    return;
  }
  console.log(data);
  registerForm.resett();
}
