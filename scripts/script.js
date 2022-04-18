import {personajes} from "../data/data.js";
let btnPers = document.getElementById('btnAleatorio')
btnPers.addEventListener('click', persRandom)
let btnPers2 = document.getElementById('btnAleatorio2')
btnPers2.addEventListener('click', persRandom)

function persRandom() {
    let min = 0;
    let max = 6
    let random = min + Math.floor(Math.random() * max)
    let Pers = personajes[random]
    Pers = Object.values(Pers)
    let nombre = Pers[0]
    let casa = Pers[1]
    let foto = Pers[2]
    const image = document.createElement('imgPerso')
    image.src = foto
    document.getElementById("Nombre").innerHTML = `Personaje: ${nombre}`
    document.getElementById("imgPerso").innerHTML = `<img src="${foto}">`
    document.getElementById('Casa').innerHTML = `${casa}`
}







