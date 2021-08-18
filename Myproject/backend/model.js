import { connect } from 'http2'
import { database } from './database.js'
export const model = {

    startGame: callback => {
        database.query('SELECT * FROM questions;', (err, results) => {
            if (err) {
                console.error(err)
            } else {
                callback(results)
            }
        })
    },

    startQuestion: callback => {
        database.query('SELECT * FROM questions;', (err, results) => {
            if (err) {
                console.error(err)
            } else {
                callback(results)
            }
        })
    },

    allQuestion: callback => {
        database.query('SELECT * FROM questions;', (err, results) => {
            if (err) {
                console.error(err)
            } else {
                callback(results)
            }
        })
    },

    randomQuestion: callback => {
        database.query('SELECT * FROM questions;', (err, results) => {
            let random = Math.floor(Math.random() * results.length);
            if (err) {
                console.error(err)
            } else {
                callback(results[random])
            }
        })
    },

    deleteQuestion: (id, callback) => {
        database.query('DELETE FROM questions WHERE id = ?;', id, (err, results1) => {
            if (err) {
                console.error(err)
            } else {
                database.query('DELETE f FROM answers AS f WHERE f.question_id = ?;', id, (err, results2) => {
                    if (err) {
                        console.error(err)
                    } else {
                        callback([results1, results2])
                    }
                })
            }
        })
    },

    newQuestion: (newQuestion, callback) => {
        let final = "x"
        database.query('INSERT INTO questions (question) VALUES (?);', newQuestion.question, (err, results) => {
            if (err) {
                console.error(err)
            } else {

                newQuestion.answers.forEach(element => {
                    database.query('INSERT INTO answers (answer,question_id, is_correct) VALUES (?,?,?);',
                        [element.answer, results.insertId, element.is_correct], (err, resultsQ) => {
                            if (err) {
                                console.error(err)
                            } else {
                                final = final + "f"
                            }
                        })

                })
            }
            callback([results, final])
        })

    }
}
// {
//     "question": "What is the lowest male voice?"
//     "answers": [
//        {
//             "answer_1": "Bariton",
//             "is_correct": 0
//         },
//         {
//             "answer_2": "Bass",
//             "is_correct"  : 1
//         },
//         {
//             "answer_3": "Tenor",
//             "is_correct": 0
//         },
//         {
//             "answer_4": "Alt",
//             "is_correct  : 0
//         }
//     ]
// }