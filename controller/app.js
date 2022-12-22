const fs = require('fs')

let rawData = fs.readFileSync(`./${process.argv[2]}`) // Accept the file to read from the terminal argument
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

}

deleteDuplicatedDocuments(objects)
deleteDuplicatedDocuments(scenes)



/* Check Duplicated Properties (Tree Traversal) */

// STEP 1 - Create a root node

let rootNode = {
    "data": {
        ...mock_application
    }
}

// STEP 2 - Iterate through the Tree from the Root

const treeTraversal = (parentNode) => {

    const nodeType = typeof parentNode

    switch(nodeType) {

        case 'object':

            Object.keys(parentNode).forEach((key, index) => {

                if (typeof key === 'array' || typeof key === "object") {
        
                    treeTraversal(key)
        
                } else if (Object.keys(parentNode).indexOf(key) !== index)  {
        
                    parentNode.splice(index, 1)
        
                }
            })

            break;

        case 'array':

            parentNode.forEach(object => {

                treeTraversal(object)

            })

            break;

    }
    

}

treeTraversal(rootNode)



/* Finally write the results to a Sanitised File */

const sanitisedData = JSON.stringify(mock_application)
fs.writeFileSync('./data/clean_application.json', sanitisedData)