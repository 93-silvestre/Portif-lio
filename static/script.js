/*Abre e fecha menu lateral em modo mobile*/

const menuMobile = document.querySelector(".menu-mobile");
const body = document.querySelector("body");

menuMobile.addEventListener("click", () => {
  menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list");
  body.classList.toggle("menu-nav-active");
});

/*Fecha o menu quando clicar em algum item e muda o icone para list*/

const navItem = document.querySelectorAll(".nav-item");

navItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (body.classList.contains("menu-nav-active")) {
      body.classList.remove("menu-nav-active");
      menuMobile.classList.replace("bi-x", "bi-list");
    }
  });
});

/* Animação de todos os itens que tenha atributo data-anime*/

const item = document.querySelectorAll("[data-anime]");

const animeScrool = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.85;
  

  item.forEach(element =>{
    if (windowTop > element.offsetTop) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  })

}

animeScrool()

window.addEventListener("scroll", ()=>{
  animeScrool();
})


/*Ativar o carregamento no botão de enviar*/

const btnEnviar = document.querySelector('#btn-enviar')
const btnEnviarLoader = document.querySelector('#btn-enviar-loader')

btnEnviar.addEventListener("click", ()=>{
  btnEnviarLoader.style.display = "block";
  btnEnviar.style.display = "none"
})

/* Tirar mensagem  de envio com sucesso depois de 3 segundos*/

setTimeout(() => {
  document.querySelector('#alerta').style.display = 'none';
}, 3000)



