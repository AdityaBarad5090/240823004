import { db } from "./db.js";
import { DataTypes } from "sequelize";

const student = db.define("student",{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
       },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    city:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

db.sync()
   .then(()=>{
     console.log("Table Created")
   })
   .catch(()=>{
    console.log("Table Error")
   })

export{
    student
}
