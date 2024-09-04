import express from "express"
import { createEvent, deleteEvent, getAllEvents, getEvent, updateEvent } from "./events.controller.js"

export const eventsRoutes = express.Router()



eventsRoutes.get('/events', getAllEvents)


eventsRoutes.get('/events/:id',getEvent)


eventsRoutes.post('/events',createEvent)


eventsRoutes.put('/events/:id', updateEvent)


eventsRoutes.delete('/events/:id',deleteEvent)