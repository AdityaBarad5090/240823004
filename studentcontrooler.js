import { student } from "./studentmodel.js";

const getstudents = async (req , res) => {
    const fun = await student.findAll()
         res.send({message:"Successfully",data:fun})
}
const getstudent = async (req , res) => {
    const fun = await student.findByPk(req.params.id)
          res.send({message:"Successfully",data:fun})
}
const createstudent = async (req , res) => {
    const fun = await student.create(req.body)
           res.send({message:"Successfully created",data:fun})
}
const updatestudent = async (req , res) => {
    const fun = await student.update(req.body,{where:{id:req.params.id}})
            res.send({message:"Successfully updated" ,data:fun})

}
const deletestudent = async (req , res) => {
    const fun = await student.destroy({where:{id:req.params.id}})
            res.send({message:"Successfully delete" ,data:fun})
}

export{
    getstudent,getstudents,createstudent,updatestudent,deletestudent
}
