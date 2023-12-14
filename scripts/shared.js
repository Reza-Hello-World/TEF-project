const backdrop = document.querySelector('.backdrop')
const modal = document.querySelector('.modal')
const btn = document.querySelectorAll('.btn')
const Register = document.querySelector('.modal__action')
const cancel = document.querySelector('.modal__action__negative')

btn.forEach(function(item) {
    item.addEventListener('click', function() {
        modal.style.display = 'block'
        backdrop.style.display = 'block'
    })
})

Register.addEventListener('click', closeModal)
cancel.addEventListener('click', closeModal)

function closeModal() {
    modal.style.display = 'none'
    backdrop.style.display = 'none'
}