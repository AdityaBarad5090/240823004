import { Router } from "express";
import { createstudent, deletestudent, getstudent, getstudents, updatestudnt } from "../controllers/studentcontrooler.js";

const router = new Router();

router.route('/')
    .post(createstudent)
    .get(getstudents)

router.route('/:id')
    .put(updatestudnt)
    .delete(deletestudent)
    .get(getstudent)

export{
    router
}