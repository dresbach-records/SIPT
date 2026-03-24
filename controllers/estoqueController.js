const estoqueService = require('../services/estoqueService');

const getAllEstoque = async (req, res) => {
  try {
    const estoque = await estoqueService.getAllEstoque();
    res.json(estoque);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createEstoque = async (req, res) => {
  try {
    const { produto, quantidade, tamanho } = req.body;
    const item = await estoqueService.createEstoque(produto, quantidade, tamanho);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateEstoque = async (req, res) => {
  try {
    const { id } = req.params;
    const { produto, quantidade, tamanho } = req.body;
    const item = await estoqueService.updateEstoque(id, produto, quantidade, tamanho);
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteEstoque = async (req, res) => {
  try {
    const { id } = req.params;
    await estoqueService.deleteEstoque(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllEstoque,
  createEstoque,
  updateEstoque,
  deleteEstoque,
};