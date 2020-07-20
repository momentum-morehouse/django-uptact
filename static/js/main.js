let addButton = document.querySelector('#add-contact-button')
let addForm = document.querySelector('#add-form')
let verifyButtons = document.querySelectorAll('.verify-button')
console.log(verifyButtons)


console.log(addButton)

addButton.addEventListener('click', function(e){
  if (e.target.parentNode.nextElementSibling.style.display === 'none'){  e.target.parentNode.nextElementSibling.style.display = "block"} 
  else {e.target.parentNode.nextElementSibling.style.display = "none"
  }
});
const csrftoken = Cookies.get('csrftoken');

for (let button of verifyButtons) {
  let contactId = button.dataset.contactId
  let nameDiv = button.parentElement
  button.addEventListener('click', function(){
    fetch(`/contacts/${contactId}/verify`, {
      method:'POST',
      headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    "X-Requested-With": "XMLHttpRequest",
    "X-CSRFToken": csrftoken
  },
    credentials: 'include'
    })
    .then(response => response.json())
    .then(data => {if (data.verified === 'true') {
    button.remove();
    check = document.createElement('i')
    check.classList.add("fa", "fa-check")
    console.log(check)
    nameDiv.appendChild(check)
    }
    })
  })
}



