let user = document.querySelectorAll('input')
let submit = document.querySelector('input#submit')
let computer = document.querySelector('div#result')

const store_computer = ['pedra', 'papel', 'tesoura']

let img = document.querySelector('img#computer')

function stone_possibilities(random) {
    if (user[0].checked && store_computer[random] == 'pedra') {
        return img.src = '../imgs/pedra.png'
    } else if (user[0].checked && store_computer[random] == 'papel') {
        return img.src = '../imgs/papel.png'
    } else if (user[0].checked && store_computer[random] == 'tesoura') {
        return img.src = '../imgs/tesoura.png'
    }
}

function paper_possibilities(random) {
    if (user[1].checked && store_computer[random] == 'papel') {

        return img.src = '../imgs/papel.png'
    } else if (user[1].checked && store_computer[random] == 'tesoura') {

        return img.src = '../imgs/tesoura.png'
    } else if (user[1].checked && store_computer[random] == 'pedra') {

        return img.src = '../imgs/pedra.png'
    }
}

function scissors_possibilities(random) {
    if (user[2].checked && store_computer[random] == 'tesoura') {

        return img.src = '../imgs/tesoura.png'
    } else if (user[2].checked && store_computer[random] == 'pedra') {

        return img.src = '../imgs/pedra.png'
    } else if (user[2].checked && store_computer[random] == 'papel') {

        return img.src = '../imgs/papel.png'
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