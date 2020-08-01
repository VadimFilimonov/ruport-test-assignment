(function() {
  var form;
  var action;
  var message;

  function findElements() {
    form = document.querySelector('.form');
    action = form.action;
  }

  function handleResponse(data) {
    message = data.message;
  }

  function showMessage() {
    alert(message);
  }

  function resetForm() {
    form.reset();
  }

  function onSuccess(response) {
    return response.json()
      .then(handleResponse)
      .then(showMessage)
      .then(resetForm);
  }

  function collectData(form) {
    var data = new FormData(form);
    return data;
  }

  function setOptions(form) {
    return {
      method: 'post',
      body: collectData(form),
    };
  }

  function sendForm(form) {
    return fetch(action, setOptions(form));
  }

  function onSubmit(event) {
    event.preventDefault();
    var currentTarget = event.currentTarget;
    sendForm(currentTarget)
      .then(function(response) {
         onSuccess(response, currentTarget);
      });
  }

  function subscribe() {
    form.addEventListener('submit', onSubmit);
  }

  function init() {
    findElements();
    subscribe();
  }

  init();

}());
