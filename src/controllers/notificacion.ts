import { Request, Response } from "express";

import { handleHttp } from "../utils/error.handle";
import { get_Notificaciones, add_Notificacion, update_Notificacion, delete_Notificacion } from "../services/notificacion"; 

const getNotificaciones = async (req:Request, res:Response) => {
    try{
        const response = await get_Notificaciones();
        res.send(response);
    } catch(e){
        handleHttp(res, "ERROR_GET_NOTIFICAIONES");
    }
};

const addNotificacion = async ({body}:Request, res:Response) => {
    try{
        const response = await add_Notificacion(body);
        res.send(response);
    }catch(e){
        handleHttp(res,"ERROR_POST_NOTIFICACION");
    }
};

const updateNotificacion = async ({params, body}:Request, res:Response) => {
    try{
        const {idNotificacion} = params;
        const response = await update_Notificacion(idNotificacion, body);
        res.send(response);
    } catch (e){
        handleHttp(res, "ERROR_UPDATE_NOTIFICACION")
    }
};

const deleteNotificacion = async ({params}:Request, res:Response) => {
    try{
        const {idNotificacion} = params;
        const response = await delete_Notificacion(idNotificacion);
        res.send(response);
    } catch(e){
        handleHttp(res, "ERROR_DELETE_NOTIFICACION");
    }
};

export{ getNotificaciones, addNotificacion, updateNotificacion, deleteNotificacion };