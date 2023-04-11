///// buffer is temporary memory which node js needs


const fs=require('fs');
const path=require('path');

const dirPath=path.join(__dirname,'crud');
const filePath=dirPath+"/apple.txt"; // coz we need it again and again;

// fs.writeFileSync(filePath,"This is a sample text");
 
///////////////reading the file

// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);
// })

//////////////////////////// append the file

// fs.appendFile(filePath," and file name is apple.txt",(err)=>{
//     if(!err) console.log("file is updated");    
// });


////////////////////rename the file
fs.rename(filePath,dirPath+"/fruit.txt",(err)=>{
    if(!err) console.log("file renamed successfully");
})
