const form = document.querySelector('form')
let button = document.querySelector('button')
let name = document.getElementById("name")
let email = document.getElementById('email')
let main = document.querySelector('main')
let ul = document.querySelector('ul')
let contact = document.getElementById('contact')
let out = document.getElementById('out')

form.addEventListener('submit', runEvent)
function runEvent(e){

    e.preventDefault(e)

    let ul = document.createElement('ul')
    ul.className = "list-group"
    out.appendChild(ul)

    out.style.display = "block"
    out.style.width="100%"

    let removeClass = document.querySelectorAll('p').length

    let outputName = document.createElement('p')
    outputName.innerText = "Name :" + name.value
    outputName.className = 'inp-name'
    ul.appendChild(outputName)

    let outputEmail = document.createElement('p')
    outputEmail.innerText = "Email :" + email.value
    outputEmail.className = 'inp-email'
    ul.appendChild(outputEmail)

    let outputContact = document.createElement('p')
    outputContact.innerText = "Contact :" + contact.value
    outputContact.className = "inp-contact"
    ul.appendChild(outputContact)

    form.reset()
}

ul.addEventListener('click', deleteTask)
function deleteTask(e){
    if(e.target.className.includes('btn')){
        let li = e.target.parentElement
        if(window.confirm('Is This Right')){
            ul.removeChild(li)
        }
    }
}