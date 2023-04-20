import { Schema, model } from "mongoose";

import { Notificacion } from "../interfaces/notificacion.interface";

const NotificacionSchema = new Schema<Notificacion>(
    {
        name: {
            type: String,
            required: true,
        },
        descr: {
            type: String,
            required: true,
        },
        prioridad: {
            type: Number,
            required: false,
        },        
        enviada: {
            type: Boolean,
            required: false,
        },
        users: {
            type: [Schema.Types.ObjectId],
            ref: 'users',
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const NotificacionModel = model('notificacion', NotificacionSchema);

export default NotificacionModel;