import db from '../database/connections';
import convertHourToMinutes from '../utils/convertHourToMinutes';
import {Request, Response} from "express";

interface ScheduleItem{
    week_day : number,
    from: string,
    to: string
}


export default class ClassesController{
    async index(req:Request, res:Response){
        const filters = req.query;

        if(!filters.week_day || !filters.subject || !filters.time){
            return res.status(400).json({
                error: "Missing filter params"
            });
        }

        const time = filters.time as string;
        const subject = filters.subject as string;
        const week_day = filters.week_day as string;

        const timeInMinutes = convertHourToMinutes(time);
    
        const classes = await db('classes')
            .whereExists(function() {
                this.select("class_schedule.*")
                    .from("class_schedule")
                    .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
                    .whereRaw('`class_schedule`.`week_day` = ??',[Number(week_day)])
                    .whereRaw('`class_schedule`.`from` <= ??',[Number(timeInMinutes)])
                    .whereRaw('`class_schedule`.`to` > ??',[Number(timeInMinutes)])


            })
            .where("classes.subject", "=", subject)
            .join("users","classes.user_id", "=", "users.id")
            .select(["classes.*","users.*"])
            
        ;

        return res.json(classes);

    }

    async create(req:Request,res:Response){
        const {
            name,
            avatar,
            bio,
            whatsapp,
            subject,
            cost,
            schedule
        } = req.body;
    
        const trx = await db.transaction();
    
        try{
            const insertedUsersIds = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio
            });
        
            const user_id = insertedUsersIds[0];
        
            const insertedClassesIds = await trx('classes').insert({
                subject,
                cost,
                user_id
            });
        
            const class_id = insertedClassesIds[0];
        
            const sanitizedSchedule = schedule.map((scheduleItem:ScheduleItem) =>{
                console.log({
                    class_id,
                    week_day : scheduleItem.week_day,
                    from : convertHourToMinutes(scheduleItem.from),
                    to : convertHourToMinutes(scheduleItem.to)
                });
                return {
                    class_id,
                    week_day : scheduleItem.week_day,
                    from : convertHourToMinutes(scheduleItem.from),
                    to : convertHourToMinutes(scheduleItem.to)
                }
            })
        
            await trx("class_schedule").insert(sanitizedSchedule);
        
            await trx.commit();
        
            return res.status(201).send();
        }catch(err){
            await trx.rollback();

            console.log(err);
    
            return res.status(400).json({
                error: "Unexpected error while creating a new class"
            })
        }
    }
}