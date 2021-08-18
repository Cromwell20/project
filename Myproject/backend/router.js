import express from 'express'
import { controller } from './controller.js'

export const staticRouter = express.Router()
export const apiRouter = express.Router()

staticRouter.get('/game', controller.startGame) //static html game working
staticRouter.get('/questions', controller.startQuestion) //static html questionsmanager working
apiRouter.get('/game', controller.randomQuestion) //random question done tested
apiRouter.get('/questions', controller.allQuestion) //all questions done tested
apiRouter.post('/questions', controller.newQuestion) //add new question done 
apiRouter.delete('/questions/:id', controller.deleteQuestion) // delete question by id done tested