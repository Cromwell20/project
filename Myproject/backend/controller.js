import { model } from './model.js'
export const controller = {

    startGame: (req, res) => {
        const callback = returnedData => {
            res.status(200).send(JSON.stringify(returnedData))
        }
        model.startGame(callback)
    },

    startQuestion: (req, res) => {
        const callback = returnedData => {
            res.status(200).send(JSON.stringify(returnedData))
        }
        model.startQuestion(callback)
    },

    randomQuestion: (req, res) => {
        const callback = returnedData => {
            res.status(200).send(JSON.stringify(returnedData))
        }
        model.randomQuestion(callback)
    },

    allQuestion: (req, res) => {
        const callback = returnedData => {
            res.status(200).send(JSON.stringify(returnedData))
        }
        model.allQuestion(callback)
    },
    newQuestion: (req, res) => {
        const callback = returnedData => {
            res.status(200).send(JSON.stringify(returnedData))
        }
        model.newQuestion(req.body, callback)
      },


    deleteQuestion: (req, res) => {
        const callback = returnedData => {
            res.status(200).send(JSON.stringify(returnedData))
        }
        model.deleteQuestion(req.params.id, callback)
    }
}