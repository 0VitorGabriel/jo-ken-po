const user = document.querySelectorAll('input')
const submit = document.querySelector('input#submit')

let computer = document.querySelector('div#result')

const store_computer = ['pedra', 'papel', 'tesoura']

let img = document.querySelector('img#computer')
let h1 = document.querySelector('h1#result')

let area_round = document.querySelector('p#total_round')
let area_defeat = document.querySelector('p#defeats')
let area_victory = document.querySelector('p#victory')

let round = 0
let defeat = 0
let victory = 0

function tie_case() {
    return h1.innerHTML = 'empate', 
    round += 1, area_round.innerHTML = `total: ${round}`
}

function win_case() {
    return h1.innerHTML = 'perdeu!', round += 1, 
    area_round.innerHTML = `total: ${round}`, 
    defeat += 1, area_defeat.innerHTML = `derrotas: ${defeat}`
}

function case_lose() {
    return h1.innerHTML = 'ganhou!', round += 1, 
    area_round.innerHTML = `total: ${round}`, 
    victory += 1, area_victory.innerHTML = `vitórias: ${victory}`
}

function stone_possibilities(random) {
    if (user[0].checked && store_computer[random] == 'pedra') {

        return img.src = '../imgs/pedra.png', tie_case()

    } else if (user[0].checked && store_computer[random] == 'papel') {
        
        return img.src = '../imgs/papel.png', win_case()

    } else if (user[0].checked && store_computer[random] == 'tesoura') {
        return img.src = '../imgs/tesoura.png', case_lose()

    }
}

function paper_possibilities(random) {
    if (user[1].checked && store_computer[random] == 'papel') {

        return img.src = '../imgs/papel.png', tie_case()

    } else if (user[1].checked && store_computer[random] == 'tesoura') {

        return img.src = '../imgs/tesoura.png', case_lose()

    } else if (user[1].checked && store_computer[random] == 'pedra') {

        return img.src = '../imgs/pedra.png', win_case()

    }
}

function scissors_possibilities(random) {
    if (user[2].checked && store_computer[random] == 'tesoura') {

        return img.src = '../imgs/tesoura.png', tie_case()

    } else if (user[2].checked && store_computer[random] == 'pedra') {

        return img.src = '../imgs/pedra.png', case_lose()

    } else if (user[2].checked && store_computer[random] == 'papel') {

        return img.src = '../imgs/papel.png', win_case()

    }
}

submit.addEventListener('click', function finaly() {

    let random_store_computer = Math.floor(
        Math.random() * store_computer.length
    )
    
    if (user[0].checked) {
        stone_possibilities(random_store_computer)
    } else if (user[1].checked) {
        paper_possibilities(random_store_computer)
    } else if (user[2].checked) {
        scissors_possibilities(random_store_computer)
    }
}) 