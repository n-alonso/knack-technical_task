const fs = require('fs')



const writeToFile = (data, path) => {

    const sanitisedData = JSON.stringify(data)
    fs.writeFileSync(path, sanitisedData)

}



module.exports = {
    readFromFile,
    writeToFile
}