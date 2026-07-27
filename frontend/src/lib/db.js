import pg from 'pg';

const { Pool } = pg;

const connectionString = import.meta.env.DATABASE_URL || process.env.DATABASE_URL;

console.log('DATABASE_URL carregada?', !!connectionString);

export const pool = new Pool({
    connectionString: connectionString,
});

pool.on('connect', () => {
    console.log('Conectado ao PostgreSQL com sucesso!');
});

pool.on('error', (err) => {
    console.error('Erro no PostgreSQL:', err);
});