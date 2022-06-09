const saveButton = document.querySelector('#adding');
const userInput = document.getElementById('user-input');
const undefinedList = document.querySelector('.things-to-do');

function storeInput() {
  if (userInput.value === '') {
    alert('Empty? Nothing to do? :)');
  } else {
    // const newList = document.createElement('ul')
    const newItem = document.createElement('li');
    newItem.innerHTML = userInput.value;
    newItem.setAttribute('class', userInput.value);
    undefinedList.appendChild(newItem);
  }
  return userInput.value = '';
};

function deleteItem(event) {
  // const newListItem = document.querySelector('li'); first attempt, but wasn't cancelling the right list item
  undefinedList.removeChild(event.target);
};

function enterValue(event) {
  if (event.key === 'Enter') {
    storeInput();
  }
};

saveButton.addEventListener('click', storeInput);
undefinedList.addEventListener('click', deleteItem);

userInput.addEventListener('keypress', enterValue);






