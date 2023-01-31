debugger

alert('Lucky game: choose whether the next number will be higher or lower and earn tokens!')
let price = 0
let nextnum = true
let result = true

for (let i = 0; i < 10; i++) {
    let num = parseInt(Math.random() * 10)
    let nextnum = confirm('Current number is: ' + num + ' ---> Will the next number be higher?')
    let num2 = parseInt(Math.random() * 10)
    let result = (num2 > num)
    if (nextnum == result) {
        price += 10
    } else {
        alert('You lost, but you earned $' + price + '. Go get some beers!')
        break
    }
}
