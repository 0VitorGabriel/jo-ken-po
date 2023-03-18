let user = document.querySelectorAll('input')
let submit = document.querySelector('input#submit')
let computer = document.querySelector('div#result')
const store_computer = ['pedra', 'papel', 'tesoura']


function stone_possibilities(random) {
    if (user[0].checked && store_computer[random] == 'pedra') {
        return alert('empate')
    } else if (user[0].checked && store_computer[random] == 'papel') {
        return alert('perdeu')
    } else if (user[0].checked && store_computer[random] == 'tesoura') {
        return alert('ganhou')
    }
}

submit.addEventListener('click', function finaly() {
    let random_store_computer = Math.floor(
        Math.random() * store_computer.length
    )

    
    stone_possibilities(random_store_computer)
}) 

