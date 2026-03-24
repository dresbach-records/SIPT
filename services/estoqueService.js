import pool from '../database.js';

export const getAllEstoque = async () => {
  const { rows } = await pool.query('SELECT * FROM estoque');
  return rows;
};

export const createEstoque = async (produto, quantidade, tamanho) => {
  const { rows } = await pool.query(
    'INSERT INTO estoque (produto, quantidade, tamanho) VALUES ($1, $2, $3) RETURNING *',
    [produto, quantidade, tamanho]
  );
  return rows[0];
};

export const updateEstoque = async (id, produto, quantidade, tamanho) => {
  const { rows } = await pool.query(
    'UPDATE estoque SET produto = $1, quantidade = $2, tamanho = $3 WHERE id = $4 RETURNING *',
    [produto, quantidade, tamanho, id]
  );
  return rows[0];
};

export const deleteEstoque = async (id) => {
  await pool.query('DELETE FROM estoque WHERE id = $1', [id]);
};
