import { Router } from "express";
import { createstudent, deletestudent, getstudent, getstudents, updatestudent } from "./studentcontroller.js";

const studentrouter = new Router();

studentrouter.route("/")
                .get(getstudents)
                .post(createstudent)

studentrouter.route("/:id")
                .get(getstudent)
                .put(updatestudent)
                .delete(deletestudent)

export{
    studentrouter
}
