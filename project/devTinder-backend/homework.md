#1. create a repositary
==> https://github.com/Sap10/namesteNode.git

#2. initialize the repositary ==> DONE

#3. node_modules, package.json, package-lock.json 
**node_module ==> In our node app all the packages source file is downloaded into the node_module.

**package.json ==> This file is the configuration of our app, it's tell us about our app settings and the packages is used on that app.

**package-lock.json ==> In package-lock.json we can get the exact version of package.

#4. Install express
==> npm i express

#5. create a server
==> 
const express = require('express');
const app = express();
const ap.listen(3000, ()=>{console.log('port running on 3000')});

#6. listen to port 7777
==> app.listen(7777, ()=>{console.log('port running on 7777')});

#7. write request handler for /test, /hello
==> app.use('/hello', (req, res) => {res.send('hello world!')});

#8. install nodemon and update script inside package.json
==> npm i -g nodemon

  "scripts": {
    "start": "node src/app.js",
    "dev": "nodemon src/app.js"
  },

#9. difference between caret(^) and tilda(~) ?
==> caret(^) give the permission to update 'minor' and 'patch' both autometically, where tilda(~) gives permission to update only 'patch'.

#10. What are dependencys?
==> The packages which is used in our app or the used packages which need help of another packages is called dependencys. 

#11. What is  the use of "-g" while npm install?
==> -g flag we use to install the package globally.


--Initianlzation git
--.gitignore
--create a remote repo on github
--push all codes to remote origin
--play with route and route extension e.g. /home, /xyz
--order of the routes matter a lot
--install postman, make workspace, collection ==> test API call
--need to test GET, POST, PUT, PATCH, DELETE API call in postman.

