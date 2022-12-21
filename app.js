const fs = require('fs')
const treeTraversal = require('tree-traversal')

let rawData = fs.readFileSync('./mock_application.json')
let mock_application = JSON.parse(rawData)

let objects = mock_application.versions[0].objects
let scenes = mock_application.versions[0].scenes


/* Check Duplicated Objects */

const deleteDuplicatedDocuments = (arrayOfObjects) => {
    
    // STEP 1 - Create an array of names so we can compare if there are repeated ones

    let names = []
    arrayOfObjects.forEach(element => {
        names.push(element.name)
    })

    // STEP 2 - Find out the index of the repeated elements

    let deleteIndexes = []
    names.forEach((element, index) => {
        if (index !== names.indexOf(element)) {
            deleteIndexes.push(index)
        }
    })

    // STEP 3 - Delete the repeated elements from the original document

    deleteIndexes.forEach(element => {
        arrayOfObjects.splice(element, 1)
    })

    // STEP 4 - Write the content back to the file to overwrite the corrupted version

    const sanitisedData = JSON.stringify(mock_application)
    fs.writeFileSync('./mock_application-fixed.json', sanitisedData)
}

deleteDuplicatedDocuments(objects)
deleteDuplicatedDocuments(scenes)



/* Check Duplicated Properties (Tree Traversal) */

// Create a root node

let rootNode = {
    "data": {
        ...mock_application
    }
}

console.log(rootNode.data.versions)

const treeTraversal = (rootNode) => {
    Object.keys(rootNode);
}