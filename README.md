# Remove Duplicates From Mock Knack Application Schema


## Introduction

This is a project with the purpose of fulfilling the technical task for a recruitment process.
The given task is to take a set of JSON data (similar to a MongoDB document/collection of documents) and sanitise it by checking for 2 factors:
- No repeated User Created Objects
- No repeated data points within objects


## Tech Stack

Tech-stack:
- Implementation code:
  - Node.js
- Testing code:
  - Mocha
  - Chai
- Deployment:
  - No Deployment (Local environment only)


## Installation

This project assumes that you have Node.js properly installed in your computer.   
To install the project, follow these steps:
- Clone this project locally `git clone <repository_url>`
- Navigate to it `cd <dir_path>`
- Install this project's dependencies `npm install`
- Run the project `npm start <file_path>` where `<file_path>` refers to which file you want to sanitise
- Test the project `npm test`


## Note

Based on the task description, this project assumes:
- Users can only create documents within `versions[0].objects` and `versions[0].scenes`, hence object duplications are only searched there
- Data point duplications can occur due to system corruption and thus can appear anywhere in the document, hence the entire tree is traversed
