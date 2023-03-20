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

function case_lose() {
    return h1.innerHTML = 'perdeu!', round += 1, 
    area_round.innerHTML = `total: ${round}`, 
    defeat += 1, area_defeat.innerHTML = `derrotas: ${defeat}`
}

function win_case() {
    return h1.innerHTML = 'ganhou!', round += 1, 
    area_round.innerHTML = `total: ${round}`, 
    victory += 1, area_victory.innerHTML = `vitórias: ${victory}`
}

let img = document.querySelector('img#computer')
const store_computer = ['pedra', 'papel', 'tesoura']

function stone_possibilities(random) {
    if (store_computer[random] == 'pedra') {

        return img.setAttribute('src','../imgs/pedra.png'), tie_case()

    } else if (store_computer[random] == 'papel') {
        
        return img.setAttribute('src','../imgs/papel.png'), case_lose()

    } else if (store_computer[random] == 'tesoura') {
        return img.setAttribute('src','../imgs/tesoura.png'), win_case()

    }
}

function paper_possibilities(random) {
    if (store_computer[random] == 'papel') {

        return img.setAttribute('src','../imgs/papel.png'), tie_case()

    } else if (store_computer[random] == 'tesoura') {

        return img.setAttribute('src','../imgs/tesoura.png'), case_lose()

    } else if (store_computer[random] == 'pedra') {

        return img.setAttribute('src','../imgs/pedra.png'), win_case()

    }
}

function scissors_possibilities(random) {
    if (store_computer[random] == 'tesoura') {

        return img.setAttribute('src','../imgs/tesoura.png'), tie_case()

    } else if (store_computer[random] == 'pedra') {

        return img.setAttribute('src','../imgs/pedra.png'), case_lose()

    } else if (store_computer[random] == 'papel') {

        return img.setAttribute('src','../imgs/papel.png'), win_case()

    }
}

const user = document.querySelectorAll('input')
const submit = document.querySelector('input#submit')

function check_pressed_button(random) {
    if (user[0].checked) {
        stone_possibilities(random)
    } else if (user[1].checked) {
        paper_possibilities(random)
    } else if (user[2].checked) {
        scissors_possibilities(random)
    }
}

submit.addEventListener('click', function play() {

    let random_store_computer = Math.floor(
        Math.random() * store_computer.length
    )
    
    check_pressed_button(random_store_computer)
}) 