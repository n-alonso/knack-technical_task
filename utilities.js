

const readFromFile = (path) => {

    let rawData = fs.readFileSync(path)
    let mock_application = JSON.parse(rawData)

}

const writeToFile = (data, path) => {

    const sanitisedData = JSON.stringify(data)
    fs.writeFileSync(path, sanitisedData)

}

module.exports = {
    readFromFile,
    writeToFile
}