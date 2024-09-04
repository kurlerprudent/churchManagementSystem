
import { Event } from "../Models/models.js";

// get all events controller

export const getAllEvents = async (req, res)=>{

    try {

        const events = await Event.find()
        res.status(200).json(events)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
// get an events by ID  controller

export const getEvent = async (req, res)=>{
            const {id} = req.params
    try {

        const events = await Event.findById(id)

        if(!events){
            return res.status(404).json('Not found')
        }
        res.status(200).json(events)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
// create new  events controller

export const createEvent = async (req, res)=>{
            const newEvent = req.body
    try {

        const events = await Event.create(newEvent)
        res.status(200).json(events)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
// update event controller

export const updateEvent = async (req, res)=>{
            const {id} = req.params
            const updatedEvent = req.body
    try {

        const events = await Event.findByIdAndUpdate(id,updatedEvent,{new:true})

        if(!events){
            return res.status(404).json('Event not found!')
        }
        res.status(200).json(events)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
// delete event controller

export const deleteEvent = async (req, res)=>{
            const {id} = req.params
    try {

        if(!events){
            return res.status(404).json('Event not found ')
        }

        const events = await Event.findByIdAndDelete()
        res.status(200).json('Event deleted successfully')
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

