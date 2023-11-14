import { pool } from '@/(common)/services/pool';
import { RowDataPacket } from 'mysql2/promise';

async function getProductFromDatabase(id: number) {
    const queryResult = await pool.query<RowDataPacket[]>(
        'select * from product where id = ?',
        [id]
    );

    return queryResult[0][0];
}

export default getProductFromDatabase;
