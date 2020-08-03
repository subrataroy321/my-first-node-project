// // node keyword `require` allows us to import modules
// const myModule = require('./myModule.js')
// const fs = require('fs');
// const http = require('http');

// console.log(myModule.beBasic())
// myModule.count();

// console.log('hello world');

// fs.readFile('story.txt','utf8', (err, data) => {
//     if (err) {
//         console.log('There was a problem reading the file');
//     } else {
//         console.log(data)
//     }
// })

// //create a server object:
// http.createServer(function (req, res) {
//     res.write('Hello World!'); //write a response to the client
//     res.end(); //end the response
//   }).listen(8080); //the server object listens on port 8080
  


// let i = 1;
// const count = () => {
//     console.log(i);
//     i*=2;
// }

// const myTimer = setInterval(count, 1000);

// const today = new Date();
// console.log(today)

const moment = require('moment');
console.log(moment().locale("MMM DD YYYY"));

console.log(moment('03-21-1994', 'MM DD YYYY').format("dddd [the] Do [of] MMMM [in the year] YYYY"));
console.log('Oh boy, that was', moment('03-21-1994', 'MM DD YYYY').fromNow(), 'years ago!')