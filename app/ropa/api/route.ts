import mysql2 from 'mysql2/promise';

const pool = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

export async function GET(req: Request) {
    const data = (await pool.query('select * from product'))[0];
    return Response.json(data);
}
