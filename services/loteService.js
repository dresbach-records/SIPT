import pool from '../database.js';

export const getAllLotes = async () => {
  const { rows } = await pool.query('SELECT * FROM tecido_lote');
  return rows;
};

export const createLote = async (tipo_tecido, metragem, data_producao, status) => {
  if (metragem <= 0) {
    throw new Error('Metragem inválida: A metragem deve ser maior que zero.');
  }
  const { rows } = await pool.query(
    'INSERT INTO tecido_lote (tipo_tecido, metragem, data_producao, status) VALUES ($1, $2, $3, $4) RETURNING *',
    [tipo_tecido, metragem, data_producao, status]
  );
  return rows[0];
};

export const updateLote = async (id, tipo_tecido, metragem, data_producao, status) => {
  if (metragem <= 0) {
    throw new Error('Metragem inválida: A metragem deve ser maior que zero.');
  }
  const { rows } = await pool.query(
    'UPDATE tecido_lote SET tipo_tecido = $1, metragem = $2, data_producao = $3, status = $4 WHERE id = $5 RETURNING *',
    [tipo_tecido, metragem, data_producao, status, id]
  );
  return rows[0];
};

export const deleteLote = async (id) => {
  await pool.query('DELETE FROM tecido_lote WHERE id = $1', [id]);
};
