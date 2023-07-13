const pass = document.querySelector('#exampleInputPassword1')
const main = document.querySelector('main.input-pass')
const msgError = document.querySelector('div.msg-error')
const msgSuccess = document.querySelector('main.msg-success')

function addDNone() {
    main.classList.add('d-none')
}

pass.addEventListener('keyup', () => {
    if (!(pass.value.toLowerCase() === 'igor')) {
        document.querySelector('div').classList.add('d-none')
        msgError.classList.remove('d-none')
    }
    if ((pass.value.toLowerCase() === 'igor')) {
        msgSuccess.classList.remove('d-none')
        window.location.href = 'index2.html'
        addDNone()
    }
    else if ((pass.value.toLowerCase() === 'saiko')) {
        document.querySelector('div.saiko').classList.remove('d-none')
        msgError.classList.add('d-none')
    }
    else if ((pass.value.toLowerCase() === 'meiaum')) {
        document.querySelector('div.meia-um').classList.remove('d-none')
        msgError.classList.add('d-none')
    }
    else if ((pass.value.toLowerCase() === 'tylerzinho')) {
        document.querySelector('div.tyler').classList.remove('d-none')
        msgError.classList.add('d-none')
    }
    else if ((pass.value.toLowerCase() === 'childishgambino')) {
        document.querySelector('div.donald').classList.remove('d-none')
        msgError.classList.add('d-none')
    }
    else if ((pass.value.toLowerCase() === 'kaliuchis')) {
        document.querySelector('div.kali-uchis').classList.remove('d-none')
        msgError.classList.add('d-none')
    }
    else if ((pass.value.toLowerCase() === 'timbernardes')) {
        document.querySelector('div.tim').classList.remove('d-none')
        msgError.classList.add('d-none')
    }
    else if ((pass.value.toLowerCase() === 'joji')) {
        document.querySelector('div.joji').classList.remove('d-none')
        msgError.classList.add('d-none')
    }
    else if ((pass.value.toLowerCase() === 'rexorangecountry')) {
        document.querySelector('div.rex').classList.remove('d-none')
        msgError.classList.add('d-none')
    }
})


window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var parallaxElements = document.getElementsByClassName('parallax-element');

    for (var i = 0; i < parallaxElements.length; i++) {
        var speed = parallaxElements[i].getAttribute('data-speed');
        var yPos = -(scrollTop * speed);
        parallaxElements[i].style.transform = 'translate3d(0px, ' + yPos + 'px, 0px)';
    }
});