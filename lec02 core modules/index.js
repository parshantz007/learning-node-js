const fs=require('fs');
fs.writeFileSync("hello2.txt","some codes")  // it makes new file with name hello.txt at given path (on terminal) and write that with the given text

//  we can also do the same with different type

// const fs=require('fs').writeFileSync;
// fs("abc.txt","another way of writing the same code");




console.log("file name -->",__filename); // tells the file name with given address;
console.log("dir name -->",__dirname);// tells the dir name



