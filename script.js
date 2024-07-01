// Code for typing effect
var typed = new Typed('#element', {
    strings: ['Web Developer.', 'Web Designer.', 'Full Stack Developer.'],
    typeSpeed: 50,
});

// Code for menu in mobile phones
let menu = document.getElementById("menu")
function closeMenu() {
    menu.style.right = "-200px"
}
function openMenu() {
    menu.style.right = "0"
}

// Code for recieve messages via forms
const scriptURL = 'https://script.google.com/macros/s/AKfycbzQWnzKZYBw7GqPP6l-zDdKmI0dWskeNB2DnstIoELtPlLmfWy8zu2Jjv0lMxH_wMMmug/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");
const submitbtn = document.getElementById("submitbtn");
form.addEventListener('submit', e => {
    e.preventDefault()
    submitbtn.style.cursor = "progress"
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = 'Message Sent Successfully!!';
            setTimeout(function () {
                msg.innerHTML = ""
            }, 4000)

            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})