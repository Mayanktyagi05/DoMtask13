function saveToLocalStorage(event){
  event.preventDefault();

  const name = event.target.username.value;
  const email = event.target.emailId.value;
  const phonenumber = event.target.phonenumber.value;

  const obj={
    name,
    email,
    phonenumber
  }
  localStorage.setItem(obj.email, JSON.stringify(obj))
  showUserOnScreen(obj)
}

function showUserOnScreen(obj){
  const parentElem = document.getElementById('listofitems');
  
  const listItem = document.createElement('li');
  listItem.innerHTML = `${obj.name} - ${obj.email} - ${obj.phonenumber}`;
  
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    deleteUserData(obj.email);
    parentElem.removeChild(listItem);
  });
  
  listItem.appendChild(deleteButton);
  parentElem.appendChild(listItem);
}

function deleteUserData(email) {
  localStorage.removeItem(email);
}
