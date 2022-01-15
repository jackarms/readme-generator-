const fs = require('fs');
const readmeDataArgs = process.argv.slice(2, process.argv.length);

const readMePage = (project, author) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
      <h1>${project}</h1>
      <h2>${author}</h2>
    </body>
    </html>
    `;
};

const project = readmeDataArgs[0];
const author = readmeDataArgs[1];

fs.writeFile('index.html', readMePage(project, author), err => {
    if (err) throw err;
})