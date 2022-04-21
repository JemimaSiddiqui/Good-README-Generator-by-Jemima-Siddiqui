const fs = require('fs');

// wrtiting to README file 
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

// exporting the file 
module.exports = writeFile;