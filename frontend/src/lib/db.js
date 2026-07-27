import pg from 'pg';

const { Pool } = pg;

console.log('DATABASE_URL:', process.env.DATABASE_URL);

export const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

pool.on('connect', () => {
    console.log('Conectado ao PostgreSQL!');
});

pool.on('error', (err) => {
    console.error('Erro no PostgreSQL:', err);
});