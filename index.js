import debounce from './lodash.js';
import refs from './refs.js';
import fetchTracking from './fetch-tracking.js';

const search = document.querySelector('#tags');
const result = document.querySelector('.result');

const resultBlock = document.querySelector('.result-block');


function detectItem () {
  const resultItem = document.querySelector('.result-item');
  console.log(resultItem)

 const resultItemListener = resultItem.addEventListener('click', (e) => {
    search.value = e.target.innerText;
    hiddenResult(resultBlock);
  })
  addEventListener(resultItemListener);
}



function hiddenResult (element) {
  element.classList.add('is-hidden');
  removeEventListener(resultItemListener);
}

function showResult (element) {
  element.classList.remove('is-hidden');
  detectItem();
}



search.addEventListener('input', debounce((e) => {
 
  const options = {
    "modelName": "Address",
    "calledMethod": "searchSettlements",
    "methodProperties": {
        Language: 'ru',
        "CityName": e.target.value,
        "Limit": 5
    }
  };

  const url = `https://api.novaposhta.ua/v2.0/json/`;

fetch(url, {
  method: 'POST',
  body: JSON.stringify(options),
  headers: {
  'Content-Type': 'application/json',
  }
})
.then(res => res.json())
.then(data => {console.log(data),
result.innerHTML = '',

data.data[0].Addresses.forEach(elem => {
  result.insertAdjacentHTML('beforeend', `<li class="result-item">${elem.Present}</li>`)
}),
showResult(resultBlock),
console.log(data.data[0].addresses)
})
.catch(error => console.log(error));
}, 200))
 

    
refs.trackingBtn.addEventListener('click', () => {
  console.log(refs.trackingInput.value)
  fetchTracking(refs.trackingInput.value);

  

})