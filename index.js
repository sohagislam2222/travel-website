

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

let btn1 = getElementById1('bus-btn');
let btn2 = getElementById1('train-btn');
let btn3 = getElementById1('flight-btn');
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
    btn1 = getElementById1('bus-btn');

    btn1.style.backgroundColor = 'blue';
    btn2.style.backgroundColor = 'gray';
    btn3.style.backgroundColor = 'gray';

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
    btn2 = getElementById1('train-btn');
    btn1.style.backgroundColor = 'gray';
    btn2.style.backgroundColor = 'blue';
    btn3.style.backgroundColor = 'gray';
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
    btn1.style.backgroundColor = 'gray';
    btn2.style.backgroundColor = 'gray';
    btn3.style.backgroundColor = 'blue';
  }


}



