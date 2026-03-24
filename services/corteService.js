import pool from '../database.js';

export const getAllCortes = async () => {
  const { rows } = await pool.query('SELECT * FROM corte');
  return rows;
};

export const createCorte = async (lote_id, quantidade_cortada, desperdicio, data) => {
  const { rows } = await pool.query(
    'INSERT INTO corte (lote_id, quantidade_cortada, desperdicio, data) VALUES ($1, $2, $3, $4) RETURNING *',
    [lote_id, quantidade_cortada, desperdicio, data]
  );
  return rows[0];
};

export const updateCorte = async (id, lote_id, quantidade_cortada, desperdicio, data) => {
  const { rows } = await pool.query(
    'UPDATE corte SET lote_id = $1, quantidade_cortada = $2, desperdicio = $3, data = $4 WHERE id = $5 RETURNING *',
    [lote_id, quantidade_cortada, desperdicio, data, id]
  );
  return rows[0];
};

export const deleteCorte = async (id) => {
  await pool.query('DELETE FROM corte WHERE id = $1', [id]);
};
