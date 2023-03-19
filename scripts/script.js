const user = document.querySelectorAll('input')
const submit = document.querySelector('input#submit')

let computer = document.querySelector('div#result')

const store_computer = ['pedra', 'papel', 'tesoura']

const img = document.querySelector('img#computer')
const h1 = document.querySelector('h1#result')

const area_round = document.querySelector('p#total_round')
const area_defeat = document.querySelector('p#defeats')
const area_victory = document.querySelector('p#victory')

let round = 0
let defeat = 0
let victory = 0

function stone_possibilities(random) {
    if (user[0].checked && store_computer[random] == 'pedra') {

        return img.src = '../imgs/pedra.png', 
        h1.innerHTML = 'empate', 
        round += 1, area_round.innerHTML = `total: ${round}`
    } else if (user[0].checked && store_computer[random] == 'papel') {
        
        return img.src = '../imgs/papel.png', h1.innerHTML = 'perdeu!', round += 1, 
        area_round.innerHTML = `total: ${round}`, 
        defeat += 1, area_defeat.innerHTML = `derrotas: ${defeat}`
    } else if (user[0].checked && store_computer[random] == 'tesoura') {
        return img.src = '../imgs/tesoura.png', h1.innerHTML = 'ganhou!', round += 1, 
        area_round.innerHTML = `total: ${round}`, 
        victory += 1, area_victory.innerHTML = `vitórias: ${victory}`
    }
}

function paper_possibilities(random) {
    if (user[1].checked && store_computer[random] == 'papel') {

        return img.src = '../imgs/papel.png',
        h1.innerHTML = 'empate', 
        round += 1, area_round.innerHTML = `total: ${round}`
    } else if (user[1].checked && store_computer[random] == 'tesoura') {

        return img.src = '../imgs/tesoura.png', 
        h1.innerHTML = 'perdeu!', 
        round += 1, area_round.innerHTML = `total: ${round}`, 
        defeat += 1, area_defeat.innerHTML = `derrotas: ${defeat}`
    } else if (user[1].checked && store_computer[random] == 'pedra') {

        return img.src = '../imgs/pedra.png', h1.innerHTML = 'ganhou!', 
        round += 1, area_round.innerHTML = `total: ${round}`, 
        victory += 1, area_victory.innerHTML = `vitórias: ${victory}`
    }
}

function scissors_possibilities(random) {
    if (user[2].checked && store_computer[random] == 'tesoura') {

        return img.src = '../imgs/tesoura.png', h1.innerHTML = 'empate', 
        round += 1, area_round.innerHTML = `total: ${round}`

    } else if (user[2].checked && store_computer[random] == 'pedra') {

        return img.src = '../imgs/pedra.png', h1.innerHTML = 'perdeu!', round += 1, 
        area_round.innerHTML = `total: ${round}`, 
        defeat += 1, area_defeat.innerHTML = `derrotas: ${defeat}`
    } else if (user[2].checked && store_computer[random] == 'papel') {

        return img.src = '../imgs/papel.png', h1.innerHTML = 'ganhou!', 
        round += 1, area_round.innerHTML = `total: ${round}`, 
        victory += 1, area_victory.innerHTML = `vitórias: ${victory}`
    }
}

submit.addEventListener('click', function finaly() {

    let random_store_computer = Math.floor(
        Math.random() * store_computer.length
    )
    
    stone_possibilities(random_store_computer)
    paper_possibilities(random_store_computer)
    scissors_possibilities(random_store_computer)
}) 