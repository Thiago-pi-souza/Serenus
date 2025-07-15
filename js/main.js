var icon = document.getElementById("icon")
var mude = document.querySelector(".h-menu")
var mudef = document.querySelector(".h-footer")
var logo = document.querySelector("#logo")
var h2Contato = document.querySelector(".h2_contato")
var email = document.querySelector(".email_icon")
var phone = document.querySelector(".phone_icon")
var insta = document.querySelector(".insta")
var face = document.querySelector(".face")
var din = document.querySelector(".linkedin")
var star1 = document.querySelector(".bird")
var star2 = document.querySelector(".birds")
var login = document.querySelector(".b1")
var cadastro = document.querySelector(".b2")
var loginToIndex = document.querySelector("#logar")
var p1 = document.querySelector(".parte1")
var p2 = document.querySelector(".parte2")
var p1L = document.querySelector(".parte1-bottom-left")
var p1R = document.querySelector(".parte1-bottom-right")

icon.onclick = function(){
    document.body.classList.toggle("dark-theme")
    document.body.classList.toggle("color")
    if(document.body.classList.contains("dark-theme")){
        mude.style.borderColor = "white"
        mudef.style.borderColor = "white"
        icon.src = "icons/sun.png"
        logo.src = "imagens/logo_branca.png"
        email.src = "icons/emaily.png"
        phone.src = "icons/telephoney.png"
        insta.src = "icons/instay.png"
        face.src = "icons/facey.png"
        din.src = "icons/diny.png"
        star1.src = "imagens/estrela.png"
        star2.src = "imagens/estrela.png"
    }else{
        icon.src = "icons/moon.png"
        mude.style.borderColor = "#280137"
        mudef.style.borderColor = "#280137"
        logo.src = "imagens/logo_colorida.png"
        email.src = "icons/email.png"
        phone.src = "icons/telephone.png"
        insta.src = "icons/insta.png"
        face.src = "icons/face.png"
        din.src = "icons/din.png"
        star1.src = "imagens/passaros.png"
        star2.src = "imagens/passaros.png"
    }
}

function enviar(){
    window.location.reload();
} 

login.onclick = function(){
    location.href = "login.html"
}

cadastro.onclick = function(){
    location.href = "cadastro.html"
}


