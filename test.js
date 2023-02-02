const fs = require('fs')

const repoFullName = fs.readFileSync('./repoFullName');
const ownerName = fs.readFileSync('./ownerName');
const githubPagesLink = 'https://' + ownerName.toString().toLowerCase().trim() + '.github.io/' + String(repoFullName).replace(`${ownerName.toString().trim()}/`, '') + '/';