const {writeFile, readFile} = require('fs')

// defining promise
const get_text = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, result) => {
            if (err){
                reject(err)
            }
            else{
                resolve(result)
            }
        })
    })
}



// calling promise as async await style
const async_await = async () => {
    try{
        const result = await get_text("./content/first.txt")
        console.log(result)
    }
    catch(e){
        console.error(e)
    }
}

async_await()