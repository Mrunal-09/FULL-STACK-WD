const path= require('path')

//console.log(path.resolve('./index.js')) //gives full  absolute path from root

//console.log(path.relative("./","./index.js")) //gives path relative to ur current directory

//console.log(path.extname('./index.js'))//gives extension

//console.log(path.dirname('./FULL STACK WD/index.js'))//returns directory name

//console.log(__dirname) //same to resolve

console.log(path.join(__dirname,'index.js'))//joins dirname to index.js



