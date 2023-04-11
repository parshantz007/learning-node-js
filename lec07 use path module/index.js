const fs = require('fs');
const path=require('path');

// const dirPath=path.join(__dirname,'files02'); 
const dirPath=path.join(__dirname,'files01'); 
console.warn(dirPath);

// for(i=0;i<4;i++)
// {
//     fs.writeFileSync(dirPath+"/apple"+i+".txt", "a fruit ");
// }



////////////////read directory///////////
fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
        console.log("file name is ",item);
    })
})
