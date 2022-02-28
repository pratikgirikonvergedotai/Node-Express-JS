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



// calling promise
get_text('./content/first.txt')
 .then(result => console.log(result))
 .catch(err => console.error(err))