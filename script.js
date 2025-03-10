let quantia = document.getElementById("quantiaInput")
let btnSubmit = document.getElementById("btnSubmit")
let valorP = document.querySelector(".valorConvertido")

let menu = document.getElementById("menu")
let menuClose = document.getElementById("fecharMenu")
let btnMenu = document.getElementById("btnMenu")

const taxasCambio = {
    'USD': { 'EUR': 0.85, 'BRL': 5.88 },
    'EUR': { 'USD': 1.18, 'BRL': 6.57 },
    'BRL': { 'USD': 0.17, 'EUR': 0.15 }
}

btnSubmit.addEventListener("click", function(){
    const moedaInicial = menu.querySelector('input[name="moedaInicial"]:checked').value
    const moedaDestino =  menu.querySelector('input[name="moedaDestino"]:checked').value
    if(quantiaInput.value ){
        if(moedaInicial != moedaDestino){
            let valorConvertido = quantia.value * taxasCambio[moedaInicial][moedaDestino]
            valorP.textContent = ` ${valorConvertido.toFixed(2)}`
            valorP.textContent = ` ${moedaDestino} ${valorConvertido.toFixed(2)}`
        }
    }
})


btnMenu.addEventListener("click", () => {
    menu.showModal()
})

menuClose.addEventListener("click", (event) => {
    const moedaInicial = menu.querySelector('input[name="moedaInicial"]:checked').value
    const moedaDestino =  menu.querySelector('input[name="moedaDestino"]:checked').value

    btnSubmit.innerText = `Converter ${moedaInicial} para ${moedaDestino}`
    event.preventDefault()
    menu.close()
})

quantia.addEventListener("input", function() {
    btnSubmit.click();
});