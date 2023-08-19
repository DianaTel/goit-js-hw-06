const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

//   const email = event.currentTarget.elements.email;
//   const password = event.currentTarget.elements.password;
  

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
    return;
  }

  console.log({ login: email.value, password: password.value});
  event.currentTarget.reset();
}
