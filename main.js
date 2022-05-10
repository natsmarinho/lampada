let interrup = document.getElementById("interruptor")
interrup.addEventListener('click', interruptor)

let cliques = 0
let estadoLamp = false
let ligada = document.getElementById('ligada')
let desligada = document.getElementById('apagada')

function interruptor(){
    document.body.classList.toggle('muda-tema')

    cliques++
    if (cliques >= 20){
        let quebrou = document.getElementById('quebrada')
        quebrou.style.display = 'flex'
        document.body.style.backgroundColor = "#1a1818"
        ligada.style.display = 'none'
        desligada.style.display = 'none'
    } else if (estadoLamp == true){
        estadoLamp = false 
        desligada.style.display = 'flex'
        document.body.style.backgroundColor = "#1a1818"
        ligada.style.display = 'none'
    } else {
        estadoLamp = true
        let ligada = document.getElementById('ligada')
        ligada.style.display = 'flex'
        document.body.style.backgroundColor = "#F0EE5F"
        desligada.style.display = 'none'
    }
}
