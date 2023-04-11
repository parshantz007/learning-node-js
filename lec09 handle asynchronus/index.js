////////// drwaback of asynchronus programming

let b=20;
let a=10;

// setTimeout(() => {
//     b=30;
// }, 2000);

// console.log(a+b);


//////////cover that drawback  by using promises

let waitingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(30);
    }, 2000);
})


waitingData.then((data)=>{
    b=data;
    console.log(a+b);
})