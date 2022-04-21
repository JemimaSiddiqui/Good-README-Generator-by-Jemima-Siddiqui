const fs = require('fs');
//const { resolveCname } = require('dns');
//const { resolve } = require('path');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'README file has been created!'
            });
        });
    });
};

module.exports = writeFile;