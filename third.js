import fs from 'fs'

fs.writeFile("abc.txt","Hello World",(error)=>{
    console.log(error);
})