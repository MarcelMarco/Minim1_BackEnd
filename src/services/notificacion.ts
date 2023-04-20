import { Types } from "mongoose";

import { Notificacion } from '../interfaces/notificacion.interface';
import UserModel from "../models/user";
import NotificacionModel from "../models/notificacion";

const get_Notificaciones = async() => {
    const responseItem = await NotificacionModel.find({}).limit(10);
    return responseItem;
};

const add_Notificacion = async (item: Notificacion) => {
    const responseInsert = await NotificacionModel.create(item);
    return responseInsert;
};

const update_Notificacion = async (idNotifiacion: string, data: Notificacion) => {
    const responseItem = await NotificacionModel.findByIdAndUpdate({_id: idNotifiacion}, data, {new: true}); 
    return responseItem;
};

const delete_Notificacion = async (idNotifiacion: string) => {
    const responseItem = await NotificacionModel.findByIdAndRemove({_id: idNotifiacion});
    return responseItem;
};

export{ get_Notificaciones, add_Notificacion, update_Notificacion, delete_Notificacion };