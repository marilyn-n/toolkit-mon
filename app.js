const shell = require('shelljs');
const fs = require('fs');

// delete old html files
// fs.readdirSync('./templates/html/')
//   .map(f => fs.unlink(`./templates/html/${f}`, err => console.log(err)));

fs.readdirSync('./templates/tt/')
  .map(inFilename => {    
     const outFilename = `${inFilename}`.replace(/.tt$/,'.html');
     const cmd = `tpage ./templates/tt/${inFilename} > ./templates/html/${outFilename}`;
    shell .exec(cmd);
  });


    

