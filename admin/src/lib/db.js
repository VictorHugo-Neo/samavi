import pg from 'pg';

const { Pool } = pg;

export const pool = new Pool({
    connectionString: import.meta.env.DATABASE_URL,
});

pool.on('connect', () => {
    console.log('Deu certo bb');
});

pool.on('error', (err) => {
    console.error(' Deu Red:', err);
});