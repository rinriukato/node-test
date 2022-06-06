console.log('first')
setTimeout(() => {
    console.log('second')
}, 4)

setTimeout(() => {
    console.log('fourth')
}, 1)

console.log('third')