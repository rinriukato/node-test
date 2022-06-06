const {readFile, writeFile} = require('fs').promises
//const util = require('util')
//const readFilePromise = util.promisify(readFile)
//const writeFilePromise = util.promisify(writeFile)

const start = async() => {
    try {
        const first = await readFile('./content/text.txt', 'utf8');
        const second = await readFile('./content/newfile.txt', 'utf8');
        await writeFile(
            './content/results.txt',
            `Content of the file" ${first} ${second}`)
        console.log(first, second)
    } catch (error) { 
        console.log(error)
    }
}

start()

/*
const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err,data)=> {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

//getText('./content/text.txt')
//.then(result => console.log(result))
//.catch(err => console.log(err))
*/