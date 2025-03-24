const crypto = require('crypto');

console.log("Hello world!");

const key = crypto.pbkdf2Sync('secret', 'salt', 5000000, 64, 'sha512');
console.log("sync operation done");

crypto.pbkdf2('password', 'salt', 5000000, 50, 'sha512',(err, derivedKey) => {
    if (err) throw err;
    console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
  });

console.log("script end");