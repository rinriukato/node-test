const {readFileSync, writeFileSync, readFile, writeFile} = require('fs');
// NEEDS PATH + Encoding

const first = readFileSync('./content/text.txt', 'utf-8')
const second = readFileSync('./content/text2.txt', 'utf-8')

console.log(first)
console.log(second)

writeFileSync('./content/newfile.txt', 'hello dingus')

readFile('./content/text.txt','utf-8' ,(err, result) => {
    if (err) { 
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/text2.txt', 'utf8', (err, result) => {
        if (err) { 
            console.log(err)
            return
    }
    const second = result;
    writeFile('./content/result-sync.txt', 'test test test', {flag: 'a'})
    })
})

// alterantive 

//const fs = require('fs');
//fs.readFileSync