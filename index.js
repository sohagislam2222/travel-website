

const allButton = document.querySelectorAll('.add-btn');
let count = 1;
let totalCost = 0;
for (const button of allButton) {

  button.addEventListener('click', function () {

    const title = button.parentNode.childNodes[1].innerText;

    const price = button.parentNode.childNodes[3].childNodes[1].innerText;


    const convertPrice = parseFloat(price);

    const newList = count + '.' + title + ':' + price;

    const li = document.createElement('li');

    li.innerText = newList;

    const newListContainer = document.getElementById('selected-place-container');

    newListContainer.appendChild(li);

    totalCost = totalCost + convertPrice;


    const totalCost1 = setElementById('total-cost', totalCost)

    setElementById('cart-count', count);



    count++;

    button.setAttribute('disabled', '');
  })

}


function setElementById(elementId, value) {
  document.getElementById(elementId).innerText = value;
}
function getElementById(elementId) {
  const element = document.getElementById(elementId);
  return element.innerText;
}

function getElementById1(elementId) {
  const element = document.getElementById(elementId);
  return element;
}


function grandTotalBus() {
  const totalCost = getElementById('total-cost');
  const totalCost1 = parseFloat(totalCost);

  if (totalCost1 === 0) {
    alert('Please Select  a Place To Visit')
  }

  else {
    const grandTotal = getElementById('grand-total');
    const grandTotal1 = parseFloat(grandTotal);
    const newTotal = totalCost1 + 100;
    setElementById('grand-total', newTotal);
    const btn = getElementById1('bus-btn');
    console.log(btn)
    btn.style.backgroundColor = 'blue';
  }
}


function grandTotalTrain() {
  const totalCost = getElementById('total-cost');
  const totalCost1 = parseFloat(totalCost);

  if (totalCost1 === 0) {
    alert('Please Select  a Place To Visit')
  }
  else {
    const grandTotal = getElementById('grand-total');
    const grandTotal1 = parseFloat(grandTotal);
    const newTotal = totalCost1 - 200;
    setElementById('grand-total', newTotal);
    const btn = getElementById1('train-btn');
    console.log(btn)
    btn.style.backgroundColor = 'blue';
  }
}

function grandTotalFlight() {
  const totalCost = getElementById('total-cost');
  const totalCost1 = parseFloat(totalCost);

  if (totalCost1 === 0) {
    alert('Please Select  a Place To Visit')
  }

  else {
    const grandTotal = getElementById('grand-total');
    const grandTotal1 = parseFloat(grandTotal);
    const newTotal = totalCost1 + 500;
    setElementById('grand-total', newTotal);
    const btn = getElementById1('flight-btn');
    console.log(btn)
    btn.style.backgroundColor = 'blue';
  }


}