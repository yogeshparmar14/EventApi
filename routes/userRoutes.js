const express = require('express');
const { createEvent,updateEvent,deleteEvent,getOneEvent } = require('../controller/events');
 

const router = express.Router();


 

//Public routes
router.post('/events',createEvent);
router.put('/events',updateEvent);
router.delete('/events/:id',deleteEvent);
router.get('/events',getOneEvent);
 





module.exports = router;