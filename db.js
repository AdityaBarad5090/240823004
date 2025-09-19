import { Sequelize } from "sequelize";

const db = new Sequelize("mca","root","",{
    dialect:"mysql",
    host:"localhost"
})

db.authenticate()
    .then(()=>{
        console.log("Database Connected")
    })
    .catch(()=>{
        console.log("Error")
    })

export{
    db
}