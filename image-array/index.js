const fs = require('fs');
const path = require('path');

const imageFolder = './images'; // Change this to your image folder path
const imageArray = [];

fs.readdir(imageFolder, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
        const imagePath = path.join(imageFolder, file);
        imageArray.push(imagePath);
    });
    console.log(imageArray);
});