const fs = require('fs');
const resolve = require('path').resolve;

const promiseExec = path =>
  new Promise((resolve, reject) => {
    try {
      if (fs.existsSync(path)) {
        return resolve(true);
      }
      resolve(false);
    } catch (err) {
      reject(err);
    }
  });

module.exports = (dir = process.cwd()) =>
  promiseExec(resolve(dir, '.git'))
    .then(result => result)
    .catch(() => false);
