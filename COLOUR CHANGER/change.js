const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e.target);
    if (e.target.id === 'white') {
      body.style.backgroundColor ='white';
    }
    if (e.target.id === 'brown') {
      body.style.backgroundColor ='brown';
    }
    if (e.target.id === 'green') {
      body.style.backgroundColor ='green';
    }
    if (e.target.id === 'grey') {
      body.style.backgroundColor ='grey';
    }
    if (e.target.id === 'seagreen') {
      body.style.backgroundColor = 'seagreen';
    }
    
  });
});
