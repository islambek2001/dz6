//ЗАДАНИЕ 1 : создать 5 массиов распаковать в один

// const one = [1,2]
// const two = [3,4]
// const three = [5,6]
// const four = [7,8]
// const five = [9,10]
//
// const fullMass = [...one, ...two, ...three, ...four, ...five]
// console.log(fullMass)

//ЗАДАНИЕ 2 : создать объект у которго есть 5 ключей посде создать новый объект и распаковать в новый объект дополнить 3 ключами

// const obj = {
//     one:1,
//     two:2,
//     three:3,
//     four:4,
//     five:5
// }
//
// const fullObj = {...obj}
// fullObj.six = 6
// fullObj.seven = 7
// fullObj.eight = 8
// console.log(fullObj)

//ЗАДАНИЕ 3 : сделать приветсвие с помощью html, js, css

const input = document.getElementById('input')
const btn = document.getElementById('btn')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    const p = document.createElement('p')
    p.innerText = `Hello ${input.value}`
    document.body.append(p)
    input.value = ''
})

