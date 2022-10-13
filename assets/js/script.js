const username = document.querySelector('#username')
const password = document.querySelector('#password')
const footer = document.querySelector('footer')
const button = footer.querySelector('button')
const pageWith = document.querySelector('body').clientWidth
const footerWith = footer.clientWidth
const footerPosition = footer.getBoundingClientRect().x

footer.addEventListener('mousemove', e => {
    const x = e.clientX
    const a = footerPosition + (footerWith / 2)
    
    
    const isValid = !!username.value && !!password.value
    
    if(x > a && !isValid){
        button.style.transform = 'translateX(-100%)'
    }

    if(x < a && !isValid){
        button.style.transform = 'translateX(100%)'
    }
})

footer.addEventListener('mouseout', e => {
    button.style.transform = 'translateX(0)'
})

button.addEventListener('click', e => {
    const isValid = !!username.value && !!password.value
    if(isValid){
        window.location.href = "https://github.com/maiconDeSouza"
    }
})

