var radios = document.getElementsByClassName('params');
var input = document.getElementById('input');
var submit = document.getElementById('submit');

// input.focus();
input.onfocus = function() {
  var placeholder = input.getAttribute("placeholder");
  input.setAttribute("placeholder", '');
  input.addEventListener("focusout", writePlaceHolder(placeholder));
};

function writePlaceHolder(placeholder) {
  console.log(placeholder);
  input.setAttribute("placeholder", placeholder);
}

function changeHTML(array) {
  input.setAttribute("placeholder", array[0]);
  submit.value = array[1];
  if (array[2]) {
    input.style.display = 'block';
    // input.focus();
    input.value == 0 ? input.value = '' : null;
  } else {
    input.style.display = 'none';
    // submit.focus();
    input.value = 0;
  }
}
