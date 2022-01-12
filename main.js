const mainMenu = document.querySelector('.mainMenu')
const openMenu = document.querySelector('.openMenu')
const closeMenu = document.querySelector('.closeMenu')

openMenu.addEventListener('click', open)

function open(){
    mainMenu.style.display="flex";
    mainMenu.style.top = '0';

}

closeMenu.addEventListener('click', close)

function close (){
    mainMenu.style.top="-100%"
}