import mysql from 'mysql';

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Leopro1..',
    database: 'crud-node-react1'
})

