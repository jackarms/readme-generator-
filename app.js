const readmeDataArgs = process.argv.slice(2, process.argv.length);

const readMePage = (project, author) => {
    return `
    Project: ${project}
    Author: ${author}
    `;
};

const project = readmeDataArgs[0];
const author = readmeDataArgs[1];

console.log(readMePage(project, author));