import { DataTypes, Sequelize }  from "sequelize";
import { db } from "../db.js";

const Student = db.define('Students',{
    id:{
       type: DataTypes.INTEGER,
       primaryKey : true,
       autoIncrement:true
    },
    name:DataTypes.STRING,
    city:DataTypes.STRING,
    gender:DataTypes.STRING,
    age:DataTypes.INTEGER
})

db.sync()
    .then(()=>{
        console.log("Table Created")
    })
    .catch((Error) => {
        console.log("Error",Error)
    })

export default Student;
