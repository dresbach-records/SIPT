import pool from '../database.js';

export const getAllProducao = async () => {
  const { rows } = await pool.query('SELECT * FROM producao');
  return rows;
};

export const createProducao = async (modelo, quantidade, tempo_producao, data) => {
  const { rows } = await pool.query(
    'INSERT INTO producao (modelo, quantidade, tempo_producao, data) VALUES ($1, $2, $3, $4) RETURNING *',
    [modelo, quantidade, tempo_producao, data]
  );
  return rows[0];
};

export const updateProducao = async (id, modelo, quantidade, tempo_producao, data) => {
  const { rows } = await pool.query(
    'UPDATE producao SET modelo = $1, quantidade = $2, tempo_producao = $3, data = $4 WHERE id = $5 RETURNING *',
    [modelo, quantidade, tempo_producao, data, id]
  );
  return rows[0];
};

export const deleteProducao = async (id) => {
  await pool.query('DELETE FROM producao WHERE id = $1', [id]);
};
