import { Router } from "express";

import { getNotificaciones, addNotificacion, updateNotificacion, deleteNotificacion } from "../controllers/notificacion";  

const router = Router();

router.get("/get/all", getNotificaciones);

router.post("/add", addNotificacion); //Create a challenge

router.post("/update/:idNotificacion", updateNotificacion); //Update the details of a challenge

router.delete("/delete/:idNotificacion", deleteNotificacion); //Remove a challenge permanently

export{ router };