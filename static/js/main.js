let addButton = document.querySelector('#add-contact')
let addForm = document.querySelector('#add-contact-form')


addButton.addEventListener('click', function(event){
  if (addForm.style.display === 'none'){
    addForm.style.display = 'block'
  }
  else {
    addForm.style.display = 'none'
  }
})

let verifyButtons = document.querySelectorAll('.verify-button')

for (let button of verifyButtons){
  document.addEventListener('click', function(event){
    let contactDiv = event.target.parentNode.parentNode
    
  })
}

