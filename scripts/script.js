const play = document.querySelector('input#submit')
const store_computer = ['pedra', 'papel', 'tesoura']

play.addEventListener('click', function randomize_and_start() {

    let random_store_computer = Math.floor(
        Math.random() * store_computer.length
    )
    
    check_pressed_button(random_store_computer)
}) 

const user = document.querySelectorAll('input')

function check_pressed_button(random) {
    if (user[0].checked) {
        stone_possibilities(random)
    } else if (user[1].checked) {
        paper_possibilities(random)
    } else if (user[2].checked) {
        scissors_possibilities(random)
    }
}

const img = document.querySelector('img#computer')

function stone_possibilities(random) {
    if (store_computer[random] == 'pedra') {

        img.src = '../imgs/pedra.png'
        tie_case()

    } else if (store_computer[random] == 'papel') {
        
        img.src = '../imgs/papel.png'
        case_lose()

    } else if (store_computer[random] == 'tesoura') {
        img.src = '../imgs/tesoura.png'
        win_case()

    }
}

function paper_possibilities(random) {
    if (store_computer[random] == 'papel') {

        img.src = '../imgs/papel.png'
        tie_case()

    } else if (store_computer[random] == 'tesoura') {

        img.src = '../imgs/tesoura.png'
        case_lose()

    } else if (store_computer[random] == 'pedra') {

        img.src = '../imgs/pedra.png'
        win_case()

    }
}

function scissors_possibilities(random) {
    if (store_computer[random] == 'tesoura') {

        img.src = '../imgs/tesoura.png'
        tie_case()

    } else if (store_computer[random] == 'pedra') {

        img.src = '../imgs/pedra.png'
        case_lose()

    } else if (store_computer[random] == 'papel') {

        img.src = '../imgs/papel.png'
        win_case()

    }
}

const title_situation = document.querySelector('h1#result')

let area_round = document.querySelector('p#total_round')
let area_defeat = document.querySelector('p#defeats')
let area_victory = document.querySelector('p#victory')

let round = 0
let defeat = 0
let victory = 0

function tie_case() {
    title_situation.innerHTML = 'empate' 
    round += 1
    area_round.innerHTML = `total: ${round}`
}

function case_lose() {
    title_situation.innerHTML = 'perdeu!'
    round += 1, 
    area_round.innerHTML = `total: ${round}` 
    defeat += 1
    area_defeat.innerHTML = `derrotas: ${defeat}`
}

function win_case() {
    title_situation.innerHTML = 'ganhou!'
    round += 1, 
    area_round.innerHTML = `total: ${round}`
    victory += 1
    area_victory.innerHTML = `vitórias: ${victory}`
}

const restart = document.querySelector('input#restart')

restart.addEventListener('click', function restart() {
    location.reload()
})