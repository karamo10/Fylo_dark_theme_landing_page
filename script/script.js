const submitBtn = document.querySelector("#submit");
const inputElement = document.querySelector("#email");
const outputMessage = document.querySelector(".message");

submitBtn.onclick = function () {
  const input = inputElement.value.trim();

  if(!input.includes("@") || !input.endsWith(".com")) {
    outputMessage.innerHTML = "Please enter a valid email address";
    outputMessage.style.color = "#b91c1c";
    inputElement.value = "";
  }
  else{
    outputMessage.innerHTML = "Thank you for signing up! Please check your inbox";
    outputMessage.style.color = "hsla(0, 0%, 84%, 0.969)";
    inputElement.value = "";
  }
};
