const video = window.document.querySelector('#videoprincipal');
if (video instanceof HTMLVideoElement) console.log(video.volume);

const links = document.querySelectorAll('.link');

function ativarElemento(elemento: HTMLElement) {
  elemento.style.color = 'red';
  elemento.style.border = '2px solid red';
}

links.forEach(link => {
  if (link instanceof HTMLElement) ativarElemento(link);
});
