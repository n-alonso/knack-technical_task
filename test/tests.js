process.argv[2] = 'test_application.json'

const { expect } = require('chai')
const fs = require('fs')
const app = require('../controller/app.js')


describe('deleteDuplicatedDocuments', () => {

    it ('Deletes duplicated objects', () => {

        expect(app.cleanObjects).to.have.lengthOf(1)

    })

    it ('Does not delete original objects', () => {
        
        expect(app.cleanScenes).to.have.lengthOf(2)

    })

})

describe('treeTraversal', () => {

    it('Deletes duplicated properties', () => {

        // Setup
        const keys = Object.keys(app.mock_application)
        expect(keys).to.have.lengthOf(2)

    })

    it('Iterates through nested nodes', () => {

        // Setup
        const keys = Object.keys(app.mock_application.versions[0])
        expect(keys).to.have.lengthOf(3)

    })

})