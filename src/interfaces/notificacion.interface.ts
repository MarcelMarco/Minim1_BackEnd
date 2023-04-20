import { ObjectId } from "mongoose";

export interface Notificacion {
    name: string;
    descr: string;
    prioridad: number; //0 poco prioritario, 1 normal, 2 muy prioritario
    enviada: boolean;
    users?: ObjectId[];
}