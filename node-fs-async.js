const { readFile, writeFile } = require('fs')

// reading file with async version . we pass a callback
// err if any error arrives and result hold are content
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  // reading file with async version . we pass a callback
  // err if any error arrives and result hold are content
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    // writing content from fiest and second
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
      }
    )
  })
})
