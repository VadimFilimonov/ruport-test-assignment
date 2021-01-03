(function () {
  const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  let form;
  let name;
  let mail;
  let submit;

  function findElements() {
    form = document.getElementById("form");
    name = document.getElementById("name");
    mail = document.getElementById("mail");
    submit = document.getElementById("submit");
  }

  function isName(value) {
    return value === name;
  }

  function isMail(value) {
    return value === mail;
  }

  function isNameValidate() {
    return name.value && name.value.length > 2;
  }

  function isMailValidate() {
    return EMAIL_REGEXP.test(mail.value);
  }

  function clearField(field) {
    field.classList.remove("form__input--error");
  }

  function errorField(field) {
    field.classList.add("form__input--error");
  }

  function enableForm() {
    submit.disabled = false;
  }

  function disableForm() {
    submit.disabled = true;
  }

  function validateName() {
    if (isNameValidate()) clearField(name);
    else errorField(name);
  }

  function validateMail() {
    if (isMailValidate()) clearField(mail);
    else errorField(mail);
  }

  function validateForm() {
    if (isNameValidate() && isMailValidate()) enableForm();
    else disableForm();
  }

  function onInput(event) {
    if (isName(event.target)) validateName();
    if (isMail(event.target)) validateMail();
    validateForm();
  }

  function subscribe() {
    form.addEventListener("input", onInput);
  }

  function init() {
    findElements();
    subscribe();
  }

  init();
})();
