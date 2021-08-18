import mysql from 'mysql2'

console.log('dbUser:', 'ADMIN')

export const database = mysql.createConnection({
    host: 'localhost',
    user: 'ADMIN',
    password: 'ADMIN',
    database: 'badger',
})

database.connect(err => {
  if (err) {
    console.error('Cannot connect to the database', err)
    return
  }
  console.log('Connection established')
})