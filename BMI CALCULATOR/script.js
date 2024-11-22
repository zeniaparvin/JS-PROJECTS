
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#result');
  const results = document.querySelector('#results');
  const button = document.querySelector('#check');

  if (height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid number ${height}`
  } else if ( weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid number ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `${bmi}`;
    const p = document.createElement('p');
    p.id = "range";
    results.appendChild(p);
    if (bmi < 18.6) {
      p.innerHTML = `under weight.`;
    } else if (bmi < 24.9) {
      p.innerHTML = `normal weight.`;
    } else {
      p.innerHTML = `over weight.`;
    }
    button.disabled= true;

    const startAgain=document.createElement('button');
    startAgain.id = "amir";
    startAgain.type="button"
    results.appendChild(startAgain);
    startAgain.innerHTML="Check Again."


    startAgain.addEventListener('click', function () {
      form.reset();  // Clear form fields
      button.disabled= false;
      result.innerHTML='' // clear all data.
      p.innerHTML = '' // clear all data.
      startAgain.remove(); //button removed.
    });

    // button.disabled = true;

    // // Create a reset button

    // const resetButton = document.createElement('button');
    // resetButton.textContent = "Check Again";
    // resetButton.type = "button";
    // resetButton.className = "reset-button";
    // results.appendChild(resetButton);

    // // Reset button click event

    // resetButton.addEventListener('click', function () {
    //   form.reset();  // Clear form fields
    //   button.disabled = false;
    //   result.innerHTML = "";  // Clear result area
    //   p.innerHTML = ""; // Clear BMI message
    //   resetButton.remove();
    // });

  }
}); 