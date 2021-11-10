const arr = [-5, -1, -2, -3, -4]
const r = arr.filter((el, i) => {
    // console.log(i)
    return el > 2
})
// console.log(r)

// const mapped = arr.map((el) => `<h1>${el}</h1>`)
// console.log(mapped);

const users = [
    {id: 1, name : 'Chanchito Feliz'},
    {id: 2, name : 'Chanchito Triste'},
    {id: 3, name : 'Chanchito Emocionado'},
    {id: 4, name : 'Felipe'}
]

const mapped = users.map((user) => `<h1>${user.name}</h1>`)
//console.log(mapped);

// const r1 = arr.reduce((acc, el) => acc + el, 0)
// const getMax = (a,b) => Math.max(a, b)
// const r1 = arr.reduce(getMax)
const r1 = users.reduce((acc, el) => `${acc}, ${el.name}`, '')
console.log(r1)