import {
  getAllEstoque as getAllEstoqueService,
  createEstoque as createEstoqueService,
  updateEstoque as updateEstoqueService,
  deleteEstoque as deleteEstoqueService
} from '../services/estoqueService.js';

export const getAllEstoque = async (req, res) => {
  try {
    const estoque = await getAllEstoqueService();
    res.json(estoque);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createEstoque = async (req, res) => {
  try {
    const { produto, quantidade, tamanho } = req.body;
    const item = await createEstoqueService(produto, quantidade, tamanho);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateEstoque = async (req, res) => {
  try {
    const { id } = req.params;
    const { produto, quantidade, tamanho } = req.body;
    const item = await updateEstoqueService(id, produto, quantidade, tamanho);
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteEstoque = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteEstoqueService(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
