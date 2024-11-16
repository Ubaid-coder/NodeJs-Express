import fs from 'node:fs/promises'

// const file = fs.readFileSync('./index.html');
// console.log(file.toString());

// fs.readFile('./index.html',(err,data) => {
//     const content = data.toString();
//     console.log(content);
// });
// let num = 0;
// setInterval(() => {
//     console.log(num++);
// },[1000])

const file = await fs.readFile('./index.html',);
console.log(file.toString());


console.log('End');
