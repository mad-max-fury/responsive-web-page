
let hamburger = document.getElementById('hamburger')
let navLinks = document.querySelector('.nav-links')
let cross = document.getElementById('cross')

cross.style.display='none'

hamburger.addEventListener('click',HamburgerControl = ()=>{
    console.log('working');
    navLinks.style.display = 'flex'
    cross.style.display='block'
    hamburger.style.display='none'
    cross.style.transition='all '
    cross.style.duration='0.4s '
    cross.style.easing='ease-in-out'


})

cross.addEventListener('click',()=>{
    console.log('working');
    navLinks.style.display = 'none'
    cross.style.display='none'
    hamburger.style.display='block'

})
