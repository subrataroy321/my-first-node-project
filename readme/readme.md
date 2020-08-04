# Node Lesson
my first node project

## create a folder my-first-node-proj

open terminal. to create a that folder type `mkdir my-first-node-proj`

`cd` into the folder.

type `npm init -y` to create a initial node file `package.json` which is linked to `index.js` file

create a `index.js`, on terminal type `touch index.js`

open `index.js` write javascript code for backend like `console.log('hello world');`.

type `node index.js` and it will return `hello world`.

### To read a English text file

```js
    const fs = require('fs');

    fs.readFile('story.txt','utf8', (err, data) => {
        if (err) {
            console.log('There was a problem reading the file');
        } else {
            console.log(data)
        }
    })
```

This will `console.log` the data inside the story.txt file.

### to create a local http server
```js
    //create a server object:
    http.createServer(function (req, res) {
        res.write('Hello World!'); //write a response to the client
        res.end(); //end the response
    }).listen(8080); //the server object listens on port 8080 
```
on a web browser open `http://localhost:8080` to see the optput.

### Using Moment node module

```js
    const moment = require('moment');
    console.log(moment().locale("MMM DD YYYY"));

    console.log(moment('03-21-1994', 'MM DD YYYY').format("dddd [the] Do [of] MMMM [in the year] YYYY"));
    console.log('Oh boy, that was', moment('03-21-1994', 'MM DD YYYY').fromNow(), 'years ago!')
```
see npm moment documentation for more instuction. 

### Access an array for module.js file

on `myModule.js` file.
```js
    module.exports.favoriteFoods = () => ['Chicken Biryani', 'Pizza', 'Calzone', 'Pasta', 'Sandwitch', 'Gulab Jamun'];

```
you can access this array from default `index.js` file
```js
    const myModule = require('./myModule.js');

    var favoriteFoods = myModule.favoriteFoods();

    for (let i = 0; i < favoriteFoods.length; i++) {
            console.log(favoriteFoods[i]);
        }
```
Output:
```
    Chicken Biryani
    Pizza
    Calzone
    Pasta
    Sandwitch
    Gulab Jamun
```

### GraphicsMagick and ImageMagick node module

to use this module you need to decleare the module at very top.

`var gm = require('gm')` 

```js
    // console.log the width and height of the image
    gm('./welcome2.png')
    .size(function (err, size) {
        if (!err)
        console.log(size.width);
        console.log(size.height)
    });
```
this function console.log the image width and image height located on the path.

Output:
```
    512
    512
```

To anotate an image.
```js
    // annotate an image
    gm('./brandNewImg.jpg')
    .stroke("black")
    .drawCircle(10, 10, 20, 10) // draws a circle over the image
    .font("Helvetica.ttf", 12)
    .drawText(30, 20, "Got it!") // draws a text over the image
    .write("./brandNewImg2.png", function (err) {
    if (!err) console.log('done');
    });
```
Output:
<img src= "./brandNewImg2.png">

```js
    // creating an image file 
    gm(200, 400, "#ddff99f3")// of width 200 and height 400 and color '#ddff99f3'
    .drawText(10, 50, "from scratch") //draw text from 10px left and 50px top 'from scratch'
    .write("./brandNewImg.jpg", function (err) {
        if (!err) console.log('done');
    });
```

Output:
<img src="./brandNewImg.jpg">


[Click Here](https://github.com/aheckmann/gm) for documentation and know more uses.