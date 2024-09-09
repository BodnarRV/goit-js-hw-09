const formData = {
    email: "",
    message: ""
}

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

form.addEventListener('input', event => {
  if (event.target.name === 'email') {
    formData.email = event.target.value;
  } else if (event.target.name === 'message') {
    formData.message = event.target.value;
  }

  localStorage.setItem("formData", JSON.stringify(formData));
});

document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem("formData");
    
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      formData.email = parsedData.email || "";
      formData.message = parsedData.message || "";

      emailInput.value = formData.email;
      messageTextarea.value = formData.message;
    }
  });

  form.addEventListener('submit', event => {
    event.preventDefault();

    if (formData.email === "" || formData.message === "") {
      alert("Fill please all fields");
      return;
    }

    console.log(formData);

    localStorage.removeItem("formData");
    formData.email = "";
    formData.message = "";
    emailInput.value = "";
    messageTextarea.value = "";
  });