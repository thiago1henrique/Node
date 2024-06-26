"use strict";
// const button = document.querySelector('button');
// function handleClick(event: PointerEvent) {
//   console.log(event.pageX);
// }
// button?.addEventListener('pointerdown', handleClick);
// function ativarMenu(event: Event) {
//   if (event instanceof MouseEvent) console.log(event.pageX);
//   else if (event instanceof TouchEvent) console.log(event.touches[0].pageX);
// }
// document.documentElement.addEventListener('mousedown', ativarMenu);
// document.documentElement.addEventListener('touchsart', ativarMenu);
//---------
// const button = document.querySelector('button');
// function handleClick(event: MouseEvent) {
//   const elemento = event.currentTarget;
//   if (elemento instanceof HTMLElement) console.log(elemento.innerText);
// }
// button?.addEventListener('click', handleClick);
const btnMobile = document.getElementById('btn-mobile');
function toggleMenu(event) {
    const nav = document.getElementById('nav');
    const button = event.currentTarget;
    if (button instanceof HTMLElement && nav) {
        nav.classList.toggle('active');
        const active = nav?.classList.contains('active');
        if (active) {
            button.setAttribute('aria-expanded', 'false');
            button.setAttribute('aria-label', 'Abrir menu');
        }
        else {
            button.setAttribute('aria-expanded', 'true');
            button.setAttribute('aria-label', 'Fechar menu');
        }
    }
    console.log(event);
}
btnMobile?.addEventListener('pointerdown', toggleMenu);
