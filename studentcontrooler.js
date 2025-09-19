import Student from "../model/studentmodel.js"

const createstudent = async (req , res) => {
     const student = await Student.create(req.body)

    res.json({message:"Inserted successfully",student})
}


const getstudents = async (req , res) => {
    const {id}  = req.params

   const student = await Student.findByPk(id)

   res.json({message:"Student Record found",student})

}
const getstudent = async (req , res) => {
      const {id}  = req.params

   const student = await Student.findByPk(id)

   res.json({message:"Student Record found",student})

}
const updatestudnt = async (req , res) => {
    const {id} = req.params

    const student = await Student.update(req.body,{where:{id:id}})

    res.json({message:"Student update successfully",student})

}
const deletestudent = async (req , res) => {
    const {id} = req.params

    const student = await Student.destroy({where:{id}})

    res.json({message:"Student delete successfully",student})

}

export{
    getstudent,
    getstudents,
    createstudent,
    updatestudnt,
    deletestudent
}
