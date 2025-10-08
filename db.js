import { Sequelize } from "sequelize";

const db = new Sequelize("mca","root","",{
    host:"localhost",
    dialect:"mysql"
})

db.authenticate()
    .then(()=>{
        console.log("DB Connected")
    })
    .catch(()=>{
        console.log("DB Connected Error")
    })

export{
    db
}
